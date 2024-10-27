import { env } from './config';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { Pinecone } from '@pinecone-database/pinecone';
import { Document } from 'langchain/document';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { PineconeStore } from "@langchain/pinecone";

export async function embedAndStoreDocs(
  client: Pinecone,
  docs: Document[]
) {
  try {
    const embeddings = new OpenAIEmbeddings();
    const index = client.Index(env.PINECONE_INDEX_NAME);

    console.log('Processing documents...');

    // Split documents into smaller chunks
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const splitDocs = await textSplitter.splitDocuments(docs);

    // Process documents in batches
    const batchSize = 100; // Adjust this value based on your needs
    for (let i = 0; i < splitDocs.length; i += batchSize) {
      const batch = splitDocs.slice(i, i + batchSize);
      
      const embeddedDocs = await Promise.all(
        batch.map(async (doc) => {
          const [embedding] = await embeddings.embedDocuments([doc.pageContent]);

          // Ensure metadata values are valid
          const sanitizedMetadata = Object.entries(doc.metadata).reduce((acc, [key, value]) => {
            if (typeof value === 'object') {
              // Convert complex objects to JSON strings
              acc[key] = JSON.stringify(value);
            } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || Array.isArray(value)) {
              acc[key] = value;
            }
            return acc;
          }, {} as Record<string, any>);

          return {
            id: Date.now().toString(),
            values: embedding,
            metadata: { ...sanitizedMetadata, text: doc.pageContent },
          };
        })
      );

      // Upsert the batch of embedded documents
      await index.upsert(embeddedDocs);
      console.log(`Processed batch ${i / batchSize + 1}`);
    }

    console.log('All documents embedded and stored successfully');
  } catch (error) {
    console.error('Error embedding and storing documents:', error);
    throw new Error('Failed to load your docs!');
  }
}

// Returns vector-store handle to be used a retrievers on langchains
export async function getVectorStore(client: Pinecone) {
  try {
    const embeddings = new OpenAIEmbeddings();
    const index = client.Index(env.PINECONE_INDEX_NAME);

    const vectorStore = await PineconeStore.fromExistingIndex(
      embeddings,
      { 
        pineconeIndex: index as any, // Type assertion
      }
    );

    return vectorStore;
  } catch (error) {
    console.error('Error getting vector store:', error);
    throw new Error('Something went wrong while getting vector store!');
  }
}

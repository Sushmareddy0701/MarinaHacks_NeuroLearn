import { Pinecone } from "@pinecone-database/pinecone";
import { env } from "./config";
import { delay } from "./utils";

let pineconeInstance: Pinecone | null = null;



async function initPinecone() {
  try {
    const pinecone = new Pinecone({
      apiKey: env.PINECONE_API_KEY,
    });

    const indexName = env.PINECONE_INDEX_NAME;
    const existingIndexes = await pinecone.listIndexes();


    return pinecone;
  } catch (error) {
    console.error("error", error);
    throw new Error("Failed to initialize Pinecone");
  }
}

export async function getPineconeClient() {
  if (!pineconeInstance) {
    pineconeInstance = await initPinecone();
  }

  return pineconeInstance;
}
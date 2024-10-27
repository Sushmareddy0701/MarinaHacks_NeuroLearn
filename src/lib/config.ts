import z from 'zod';


const envSchema = z.object({
  OPENAI_API_KEY: z.string(),
  PINECONE_API_KEY: z.string(),
  PINECONE_ENVIRONMENT: z.string(),
  PINECONE_INDEX_NAME: z.string(),
  PDF_PATH: z.string(),
  INDEX_INIT_TIMEOUT: z.number(),
});

export const env = envSchema.parse({
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  PINECONE_API_KEY: process.env.PINECONE_API_KEY,
  PINECONE_ENVIRONMENT: process.env.PINECONE_ENVIRONMENT,
  PINECONE_INDEX_NAME: process.env.PINECONE_INDEX_NAME,
  PDF_PATH: process.env.PDF_PATH,
  INDEX_INIT_TIMEOUT: parseInt(process.env.INDEX_INIT_TIMEOUT || "0", 10),
});



import { z } from "zod";
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.preprocess((val) => Number(val), z.number().int().positive()),
});

export const env = envSchema.parse(process.env);

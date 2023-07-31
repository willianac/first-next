import { Client } from "pg";

const connectionString = process.env.PG_CONNECTION_STRING

export const dbClient = new Client({ connectionString })
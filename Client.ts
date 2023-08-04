import { Client } from "pg";

const connectionString = process.env.PG_CONNECTION_STRING

export default function openNewClient() {
  return new Client({ connectionString })
}
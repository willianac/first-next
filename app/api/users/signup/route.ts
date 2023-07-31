import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { dbClient } from "../../../../dbConnect";


export async function POST(request: NextRequest) {
  const { name, username, password } = await request.json()
  const id = uuidv4()
  const text = "INSERT INTO users(id, name, password, username) VALUES($1, $2, $3, $4) RETURNING id, name"
  const values = [id, name, username, password]

  const queryResponse = await dbClient.query(text, values)

  await dbClient.end()

  const response = NextResponse.json({
    success: true,
    user: JSON.stringify(queryResponse.rows[0]) 
  })

  return response
}

dbClient.connect()
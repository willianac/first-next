import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import openNewClient from "../../../../Client";

export async function POST(request: Request) {
  const { name, username, password } = await request.json()
  const id = uuidv4()
  const dbClient = openNewClient()
  await dbClient.connect()

  const existingUserQuery = "SELECT * FROM users WHERE username=$1"
  
  const userAlreadyExists = await dbClient.query(existingUserQuery, [username])

  if(userAlreadyExists.rows[0]) {
    dbClient.end()
    return NextResponse.json({success: false, error: 'Usuário já existe', code: "useralreadytaken"}, {status: 400})
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const createUserQuery = "INSERT INTO users(id, name, password, username) VALUES($1, $2, $3, $4) RETURNING id, name, username"
  const values = [id, name, hashedPassword, username]

  const queryResponse = await dbClient.query(createUserQuery, values)

  const response = NextResponse.json({
    success: true,
    user: JSON.stringify(queryResponse.rows[0]) 
  }, {
    status: 201
  })

  const cookie = JSON.stringify(queryResponse.rows[0])
  response.cookies.set("x-access-token", cookie)

  await dbClient.end()
  return response
}
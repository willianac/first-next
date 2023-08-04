import { NextResponse } from "next/server";
import openNewClient from "../../../../Client";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { username, password } = await request.json()
  const dbClient = openNewClient()
  await dbClient.connect()

  const userExistsQuery = "SELECT * FROM users WHERE username=$1"
  const userExists = await dbClient.query(userExistsQuery, [username])
  
  if(!userExists.rows[0]) {
    dbClient.end()
    return NextResponse.json({ error: "Usuário ou senha incorretos" }, { status: 422 })
  }

  const savedPassword = userExists.rows[0].password
  const isPasswordValid = await bcrypt.compare(password, savedPassword)

  if(!isPasswordValid) {
    return NextResponse.json({ success: false, error: "Usuário ou senha incorretos" }, { status: 422 })
  }

  const userResponse = {
    id: userExists.rows[0].id,
    name: userExists.rows[0].name,
    username: userExists.rows[0].username
  }

  const response = NextResponse.json({
    success: true,
    user: JSON.stringify(userResponse)
  })

  const cookie = JSON.stringify(userResponse)
  response.cookies.set("x-access-token", cookie)
  
  await dbClient.end()
  return response
}
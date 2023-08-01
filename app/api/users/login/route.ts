import { NextResponse } from "next/server";
import { dbClient } from "../../../../dbConnect";
import bcrypt from "bcrypt";

dbClient.connect()

export async function POST(request: Request) {
  const { username, password } = await request.json()

  const userExistsQuery = "SELECT * FROM users WHERE username=$1"
  const userExists = await dbClient.query(userExistsQuery, [username])
  
  if(!userExists.rows[0]) {
    return NextResponse.json({ error: "Usuário ou senha incorretos" }, { status: 422 })
  }

  const savedPassword = userExists.rows[0].password
  const isPasswordValid = await bcrypt.compare(password, savedPassword)

  if(!isPasswordValid) {
    return NextResponse.json({ success: false, error: "Usuário ou senha incorretos" }, { status: 422 })
  }

  const userResponse = {
    id: userExists.rows[0].id,
    name: userExists.rows[0].name
  }

  await dbClient.end()

  return NextResponse.json({
    success: true,
    user: JSON.stringify(userResponse)
  })
}
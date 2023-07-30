import { Metadata } from "next";
import { SignUpForm } from "../_components/signup-form";

export const metadata: Metadata = {
  title: "Criar uma conta"
}

export default function SignUp() {

  const doSignUp = async (user: any) => {
    "use server"
    await fetch("http://localhost:3000/api/users/signup", {
      method: "POST",
      body: JSON.stringify(user)
    })
  }

  return (
    <SignUpForm submit={doSignUp}/>
  )
}
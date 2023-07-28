import { Metadata } from "next";
import { SignUpForm } from "../_components/signup-form";

export const metadata: Metadata = {
  title: "Criar uma conta"
}

export default function SignUp() {
  return (
    <SignUpForm />
  )
}
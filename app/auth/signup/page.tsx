import { Metadata } from "next";
import { SignUpForm } from "../_components/signup-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Criar uma conta"
}

export default function SignUp() {

  return (
    <>
      <SignUpForm />
      <Link href="/articles">Home</Link>
    </>
  )
}
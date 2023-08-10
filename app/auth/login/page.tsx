import { Metadata } from "next";
import { LoginForm } from "../_components/login-form";

export const metadata: Metadata = {
  title: "Fazer Login"
}

export default function Login() {

  return (
    <LoginForm />
  )
}
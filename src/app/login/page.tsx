import React from "react";
import HomeButton from "@/components/HomeButton"
import {ChevronLeft} from "lucide-react"
import { redirect } from "next/dist/server/api-utils";

function Login() {
  return (
    <>
      <HomeButton text="Accueil" icon={<ChevronLeft size={20} />} variant="outline" />
      <div>Login</div>
    </>
  );
}

export default Login;

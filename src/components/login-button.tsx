"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";

export function LoginButton() {
  return (
    <Button 
      className="w-full"
      onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
    >
      <MessageSquare className="mr-2 h-5 w-5" />
      Entrar com Discord
    </Button>
  );
}

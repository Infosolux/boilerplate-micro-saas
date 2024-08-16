"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { setMetadata } from "@/functions/set-metadata";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  setMetadata({
    title: "Login",
    description: "Faça login na sua conta ou crie uma nova."
  });

  async function handleLogin() {
    await signIn("github");
  }

  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-green-400">

      <Card className="w-96 space-y-4">
        <CardTitle className="ml-3 pt-4">Login</CardTitle>
        <CardDescription className="ml-3 pb-4">Faça seu login ou crie uma conta com um dos provedores abaixo:</CardDescription>
        <CardContent className="space-y-4">
          <Separator className="my-4" />
          <div className="flex flex-col space-y-4">
            <Button onClick={handleLogin}>
              <span className="icon-[mdi--github] mr-2" />
              Login com GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
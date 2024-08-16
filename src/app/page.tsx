"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DefaulPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Default Page</h1>

      <Button onClick={() => router.push('/login')} >Login</Button>
    </div>
  )
}
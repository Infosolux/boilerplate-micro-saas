"use client";

import { setMetadata } from "@/functions/set-metadata";

export default function CustomerDashboardPage() {
  setMetadata({
    title: "Dashboard",
    description: "Página inicial do usuário logado."
  });

  return (
    <main>
      <div>
        <h1>Dashboard</h1>
      </div>
    </main>
  );
}
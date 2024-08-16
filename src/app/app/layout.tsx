"use client";

import { SocketProvider } from "@/providers/socket-provider";
import { SessionProvider } from "next-auth/react";
import { MainNavigationMenu } from "./_components/MainMenu";

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <>
      <SessionProvider>
        <SocketProvider>
          <MainNavigationMenu />
          <main>
            <div>{children}</div>
          </main>
        </SocketProvider>
      </SessionProvider>
    </>
  );
};
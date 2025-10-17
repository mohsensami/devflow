"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import ThemeProvider from "@/context/Theme";

type ProvidersProps = {
  children: ReactNode;
  session: any;
};

const Providers = ({ children, session }: ProvidersProps) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;


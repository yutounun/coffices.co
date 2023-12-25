"use client";
import { ReactNode } from "react";
import { NextAuthProvider } from "./SessionProviderContext";
import theme from "../app/theme";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type ClientComponentProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export default function ClientComponent({ children }: ClientComponentProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextAuthProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </NextAuthProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

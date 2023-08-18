"use client";
import "../styles/globals.scss";
import type { Metadata } from "next";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import { createTheme, ThemeProvider } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// @ts-ignore
export const metadata: Metadata = {
  title: "کارنامه",
};
const queryClient = new QueryClient();

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans, Roboto, Tahoma, serif",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <html lang="fa" dir="rtl">
            <body>{children}</body>
          </html>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}

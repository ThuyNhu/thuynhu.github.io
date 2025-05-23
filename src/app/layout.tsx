import type {Metadata} from "next";
import "../styles/globals.css";
import React from "react";
import {cn} from "@/lib/utils";
import {jetbrainsMono, playwriteUsModern, playwriteUsTrad} from "@/lib/fonts";
import {ThemeProvider} from "@/components/themes/theme-provider";

export const metadata: Metadata = {
  title: "Thuy Nguyen",
  description: "Thuy Nguyen's website",
  icons: {
    icon: "/favicon.ico",
  },
  creator: "Thuy Nguyen",
  authors: [
    {
      name: "Thuy Nguyen",
      url: "https://thuy.fun",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // noinspection HtmlRequiredTitleElement
  return (
    <html lang="en" className={cn(
      jetbrainsMono.variable,
      playwriteUsTrad.variable,
      playwriteUsModern.variable,
      "font-sans"
    )}>
    <head>
    </head>
    <body>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      // disableTransitionOnChange
      // enableColorScheme
    >
      {children}
    </ThemeProvider>
    </body>
    </html>
  );
}

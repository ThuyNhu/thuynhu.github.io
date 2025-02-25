import type {Metadata} from "next";
import "./globals.css";
import React from "react";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {ColorSchemeScript, createTheme, mantineHtmlProps, MantineProvider} from "@mantine/core";

export const metadata: Metadata = {
  title: "Thuy Nguyen's website",
  description: "Thuy Nguyen's website",
};

const theme = createTheme({
  primaryColor: "pink",
  primaryShade: {
    light: 4,
    dark: 5,
  }
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
    <head>
      <ColorSchemeScript/>
    </head>
    <body>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      {children}
    </MantineProvider>
    </body>
    </html>
  );
}

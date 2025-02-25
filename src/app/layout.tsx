import type {Metadata} from "next";
import "./globals.css";
import React from "react";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {ColorSchemeScript, createTheme, DEFAULT_THEME, mantineHtmlProps, MantineProvider, rem} from "@mantine/core";

export const metadata: Metadata = {
  title: "Thuy Nguyen's website",
  description: "Thuy Nguyen's website",
};

const theme = createTheme({
  fontFamily: "Sixtyfour, serif",
  primaryColor: "pink",
  primaryShade: {
    light: 4,
    dark: 5,
  },
  headings: {
    fontFamily: `Sixtyfour, ${DEFAULT_THEME.fontFamily}`,
    fontWeight: '400',
    sizes: {
      h1: {
        fontWeight: '80',
        fontSize: rem(24),
        lineHeight: '1.4',
      },
    }
  }
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // noinspection HtmlRequiredTitleElement
  return (
    <html lang="en" {...mantineHtmlProps}>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap" rel="stylesheet"/>
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

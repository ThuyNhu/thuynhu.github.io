import type {Metadata} from "next";
import "../styles/globals.css";
import React from "react";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  Container,
  createTheme,
  DEFAULT_THEME,
  mantineHtmlProps,
  MantineProvider,
  rem,
} from "@mantine/core";
import {cn} from "@/lib/utils";
import {fontSixtyfour} from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Thuy Nguyen",
  description: "Thuy Nguyen's website",
  icons: {
    icon: "/logo.ico",
  },
  creator: "Thuy Nguyen",
  authors: [
    {
      name: "Thuy Nguyen",
      url: "https://thuy.fun",
    },
  ],
};

const theme = createTheme({
  fontFamily: "sans-serif",
  primaryColor: "pink",
  primaryShade: {
    light: 4,
    dark: 5,
  },
  headings: {
    fontFamily: `Sixtyfour, ${DEFAULT_THEME.fontFamily}`,
    fontWeight: "400",
    sizes: {
      h1: {
        fontWeight: "80",
        fontSize: rem(24),
        lineHeight: "1.4",
      },
    },
  },
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
      <ColorSchemeScript/>
    </head>
    <body className={cn(
      fontSixtyfour.variable,
      fontSixtyfour.className,
      "antialiased",
    )}>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Container className="relative">{children}</Container>
    </MantineProvider>
    </body>
    </html>
  );
}

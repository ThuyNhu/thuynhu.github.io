import {JetBrains_Mono, Playwrite_US_Modern, Playwrite_US_Trad} from "next/font/google";

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: "variable",
  subsets: ["latin-ext", "vietnamese"],
  // subsets: ["cyrillic-ext", "greek", "latin-ext", "vietnamese"],
});

export const playwriteUsTrad = Playwrite_US_Trad({
  variable: "--font-playwrite-usa-trad",
  weight: "variable",
});

export const playwriteUsModern = Playwrite_US_Modern({
  variable: "--font-playwrite-usa-modern",
  weight: "variable",
});
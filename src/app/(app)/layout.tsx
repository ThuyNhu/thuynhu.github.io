"use client";

import React from "react";
import "@/styles/globals.css";
import {SiteHeader} from "@/components/layout/header";
import {SiteFooter} from "@/components/layout/footer";

export default function RootClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="relative flex min-h-svh flex-col bg-background font-mono">
      <div data-wrapper="" className="flex flex-1 flex-col">
        <SiteHeader/>
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter/>
      </div>
    </div>
  );
}

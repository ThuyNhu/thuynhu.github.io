"use client";

import React from "react";
import {Center} from "@mantine/core";
import {TypingAnimation} from "@/components/magicui/typing-animation";
import {LinkWithTypingAnimation} from "@/components/custom/link-with-typing-animation";
import {DoorClosed} from "lucide-react";

export default function Home() {
  const msPerChar = 50;
  const textWelcome = "A warm welcome to my corner of the Internet";

  return (
    <Center h="100vh" className="text-right flex flex-col gap-8">
      <div className="w-full text-8xl">🤗</div>
      <TypingAnimation duration={msPerChar}>{textWelcome}</TypingAnimation>
      <LinkWithTypingAnimation text="Come on in →" delay={textWelcome.length * msPerChar}
                               duration={msPerChar} link="/present"/>
    </Center>
  );
}

import Link from "next/link";
import React from "react";
import {cn} from "@/lib/utils";
import {PinkTypingAnimationText} from "@/components/custom/pink-typing-animation-text";

interface LinkWithTypingAnimationProps {
  text: string;
  delay: number;
  duration: number;
  link: string;
  className?: string;
}

export function LinkWithTypingAnimation({text, delay, duration, link, className}: LinkWithTypingAnimationProps) {
  return (
    <div className={cn("w-full", className)}>
      <Link href={link}>
        <PinkTypingAnimationText text={text} delay={delay} duration={duration}/>
      </Link>
    </div>
  );
}
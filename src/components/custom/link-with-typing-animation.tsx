import Link from "next/link";
import React, {HTMLProps} from "react";
import {PinkTypingAnimationText} from "@/components/custom/pink-typing-animation-text";

interface LinkWithTypingAnimationProps extends HTMLProps<HTMLDivElement> {
  text: string;
  delay: number;
  duration: number;
  link: string;
}

export function LinkWithTypingAnimation({text, delay, duration, link, ...props}: LinkWithTypingAnimationProps) {
  return (
    <div {...props}>
      <Link href={link}>
        <PinkTypingAnimationText text={text} delay={delay} duration={duration}/>
      </Link>
    </div>
  );
}
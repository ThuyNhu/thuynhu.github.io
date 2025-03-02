import React from "react";
import {TypingAnimation} from "@/components/magicui/typing-animation";

interface PinkTextProps {
  text: string;
  delay: number;
  duration: number;
}

export function PinkTypingAnimationText({text, delay, duration}: PinkTextProps) {
  return (
    <TypingAnimation delay={delay} duration={duration} className="text-pink-300 hover:text-pink-500">
      {text}
    </TypingAnimation>
    );
}


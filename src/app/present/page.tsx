"use client";

import React, {useEffect, useRef} from "react";
import {HoverTypingAnimationContainer} from "@/components/custom/hover-typing-animation-container";
import {PinkTypingAnimationText} from "@/components/custom/pink-typing-animation-text";
import {NavigationScrollTopOrBottom} from "@/components/custom/navigation-scroll-top-or-bottom";


export default function Home() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const middleSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the middle section when the component mounts
    if (middleSectionRef.current) {
      middleSectionRef.current.scrollIntoView({
        behavior: "instant", // or 'smooth' for a scrolling animation
        block: "center",
      });
    }
  }, []);

  return (
    <div ref={timelineRef}
      className="max-h-screen w-full overflow-y-scroll flex flex-col gap-8 snap-y snap-mandatory no-scrollbar">
      <div className="min-h-screen snap-center flex flex-col justify-around items-center">
          <NavigationScrollTopOrBottom targetRef={timelineRef} href="/past" isTop>
            <PinkTypingAnimationText
              text="Trip to the Past"
              delay={0}
              duration={16}
            />
          </NavigationScrollTopOrBottom>
      </div>

      <div ref={middleSectionRef} className="min-h-screen snap-center flex flex-col justify-around items-center">
        <div className="animate-[var(--animate-bounce)_1s_linear_reverse]">
          <HoverTypingAnimationContainer text={"Past"} hoveredText={"Scroll up to the Past"}/>
        </div>
        <div className="flex flex-col gap-8 text-center snap-center">
          <div className="text-8xl">👩🏻‍💻</div>
          {"Hi! I'm Thuy, a software engineer."}
          <br/>
          {"I spend my time convince computers to do what I want."}
        </div>
        <div className="animate-bounce">
          <HoverTypingAnimationContainer text={"Future"} hoveredText={"Scroll down to the Future"}/>
        </div>
      </div>

      <div className="min-h-screen snap-center flex flex-col justify-around items-center">
          <NavigationScrollTopOrBottom targetRef={timelineRef} href="/future">
            <PinkTypingAnimationText
              text="Trip to the Future"
              delay={0}
              duration={16}
            />
          </NavigationScrollTopOrBottom>
      </div>
    </div>
  );
}
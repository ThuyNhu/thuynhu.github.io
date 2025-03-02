"use client";

import React, {useEffect, useRef} from "react";
import {Center, Container} from "@mantine/core";
import {
  NavigationScrollTopOrBottom,
} from "@/components/custom/navigation-scroll-top-or-bottom";
import {HoverTypingAnimationContainer} from "@/components/custom/hover-typing-animation-container";
import {PinkTypingAnimationText} from "@/components/custom/pink-typing-animation-text";

export default function Home() {
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
    <Center h="300vh" className="flex flex-col gap-8">
      <Container className="absolute top-[50vh]">
        <NavigationScrollTopOrBottom href="/past" isTop={true}>
          <PinkTypingAnimationText
            text="Trip to the Past"
            delay={0}
            duration={16}
          />
        </NavigationScrollTopOrBottom>
      </Container>
      <div className="animate-[var(--animate-bounce)_1s_linear_reverse]">
        <HoverTypingAnimationContainer text={"Past"} hoveredText={"Scroll up to the Past"}/>
      </div>
      <section ref={middleSectionRef}>
        <Center h="50vh" className="flex flex-col gap-8 text-center">
          <div className="text-8xl">👩🏻‍💻</div>
          {"Hi! I'm Thuy, a software engineer."}
          <br/>
          {"I spend my time convince computers to do what I want."}
        </Center>
      </section>
      <div className="animate-bounce">
        <HoverTypingAnimationContainer text={"Future"} hoveredText={"Scroll down to the Future"}/>
      </div>
      <Container className="absolute bottom-[50vh]">
        <NavigationScrollTopOrBottom href="/future" isTop={false}>
          <PinkTypingAnimationText
            text="Trip to the Future"
            delay={0}
            duration={16}
          />
        </NavigationScrollTopOrBottom>
      </Container>
    </Center>
  );
}
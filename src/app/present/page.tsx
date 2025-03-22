"use client";

import React, {useEffect, useRef} from "react";
import {LinkWithTypingAnimation} from "@/components/custom/link-with-typing-animation";
import {Container} from "@mantine/core";


export default function Present() {
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
    <div className="flex flex-row items-center justify-around">
      <div className="flex items-center justify-center grow">
        <LinkWithTypingAnimation text={"← Past"} delay={0} duration={10} link={"/past"}/>
      </div>
      <Container ref={timelineRef}
                 className="max-h-screen w-full overflow-y-scroll flex flex-col gap-8 snap-y snap-mandatory no-scrollbar">
        {/*top section*/}
        <div className="min-h-screen snap-center flex flex-col justify-around items-center">
        </div>

        {/*middle section*/}
        <div ref={middleSectionRef} className="min-h-screen snap-center flex flex-col justify-around items-center">
          <div className="flex flex-col items-center gap-8 space text-xl text-center">
            <div className="text-8xl">👩🏻‍💻</div>
            {"Hi! I'm Thuy, a software engineer."}
            <br/>
            {"I spend my time convince computers to do what I want."}
          </div>
        </div>

        {/*bottom section*/}
        <div className="min-h-screen snap-center flex flex-col justify-around items-center">
        </div>
      </Container>
      <div className="flex items-center justify-center grow">
        <LinkWithTypingAnimation text={"Future →"} delay={0} duration={10} link={"/future"}/>
      </div>
    </div>
  );
}
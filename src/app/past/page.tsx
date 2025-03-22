"use client";
import {Timeline, Text, Center, Title} from "@mantine/core";
import React, {useEffect, useRef} from "react";
import {LinkWithTypingAnimation} from "@/components/custom/link-with-typing-animation";

export default function Past() {
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
        <Center className="min-h-screen justify-around items-center">
          <Title>Education</Title>
          <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item title="University of Twente">
              <Text c="dimmed" size="sm"> Master of Science in Computer Science</Text>
              <Text size="xs" mt={4}>2019-2021</Text>
            </Timeline.Item>

            <Timeline.Item title="Ho Chi Minh City University of Technology (BKU)">
              <Text c="dimmed" size="sm">Bachelor of Engineering in Computer Science</Text>
              <Text size="xs" mt={4}>2014-2019</Text>
            </Timeline.Item>
          </Timeline>
        </Center>
      </div>


      <div ref={middleSectionRef} className="min-h-screen snap-center flex flex-col justify-around items-center">
        <div className="flex flex-row items-center gap-8 space text-xl">
          <LinkWithTypingAnimation text={"← Past"} delay={0} duration={10} link={"/past"}/>
          <div className="flex flex-col gap-8 text-center text-2xl snap-center">
            <div className="text-8xl">👩🏻‍💻</div>
            {"Hi! I'm Thuy, a software engineer."}
            <br/>
            {"I spend my time convince computers to do what I want."}
          </div>
          <LinkWithTypingAnimation text={"Future →"} delay={0} duration={10} link={"/future"}/>
        </div>
      </div>

      <div className="min-h-screen snap-center flex flex-col justify-around items-center">
      </div>
    </div>
  );
}

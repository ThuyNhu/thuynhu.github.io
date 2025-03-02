import Link from "next/link";
import {Center, Group, Title} from "@mantine/core";
import {LinkWithTypingAnimation} from "@/components/custom/link-with-typing-animation";

export default function NotFound() {
  return (
    <Center h="100vh" className="flex flex-col gap-8">
      <Title>{"I'm working on making this part of my corner exist. Please be patient. Or not."}</Title>
      <Group justify="space-between" className="w-full">
        {/*<LinkWithTypingAnimation text={"← To the Door"} delay={0} duration={16} link={"/"}/>*/}
        <LinkWithTypingAnimation text={"Back to the Present →"} delay={0} duration={16} link={"/present"}/>
      </Group>
    </Center>
  );
}
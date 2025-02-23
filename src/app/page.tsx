import React from "react";
import {Center, Container, Image, Title} from "@mantine/core";

export default function Home() {
  return (
    <Center h="100vh">
      <Container className="flex flex-col items-center gap-4">
        <Title>This page is temporarily experiencing a severe case of</Title>
        <Title>&#39;not being a website yet.&#39;</Title>
        <Title>Treatment is underway.</Title>
        <Image
          radius="md"
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY295bmwyeHl2dGJwbmtvcmd3c3VqMWd2aHh4NTA5NmhqMXBoZ21sYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mCRJDo24UvJMA/giphy.gif"
        />
      </Container>
    </Center>
  );
}

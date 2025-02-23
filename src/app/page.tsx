import React from "react";
import {Button, Center, Container, Title} from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Center h="100vh">
      <Container>
        <Title>Hello, World!</Title>
        <Button component={Link} href="/hello"
                variant="gradient"
                gradient={{from: "pink", to: "grape", deg: 90}}
        >
          Say hello
        </Button>
      </Container>
    </Center>
  );
}

"use client";

import React from "react";
import {Button, Center, Container, Group, Title, useMantineColorScheme} from "@mantine/core";
import Link from "next/link";

export default function Hello() {
  const {setColorScheme, clearColorScheme} = useMantineColorScheme();

  return (
    <Center h="100vh">
      <Container>
        <Title>Color scheme:</Title>

        <Group>
          <Button onClick={() => setColorScheme('light')}>Light</Button>
          <Button onClick={() => setColorScheme('dark')}>Dark</Button>
          <Button onClick={() => setColorScheme('auto')}>Auto</Button>
          <Button onClick={clearColorScheme}>Clear</Button>
        </Group>

        <br/>
        <Button component={Link} href="/"
                variant="gradient"
                gradient={{from: "pink", to: "grape", deg: 90}}
        >
          Home
        </Button>
      </Container>
    </Center>
  );
}

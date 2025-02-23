"use client";

import React from "react";
import {Button, Group, useMantineColorScheme} from "@mantine/core";

export default function Hello() {
  const {setColorScheme, clearColorScheme} = useMantineColorScheme();

  return (
    <div>
      <h1>Color scheme:</h1>

      <Group>
        <Button onClick={() => setColorScheme('light')}>Light</Button>
        <Button onClick={() => setColorScheme('dark')}>Dark</Button>
        <Button onClick={() => setColorScheme('auto')}>Auto</Button>
        <Button onClick={clearColorScheme}>Clear</Button>
      </Group>
    </div>
  );
}

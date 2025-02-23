import React from "react";
import {Button} from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello, World!</h1>

      <Button component={Link} href="/hello">
        Say hello!
      </Button>
    </div>
  );
}

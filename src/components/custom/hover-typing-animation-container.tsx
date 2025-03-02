import {Container, ContainerProps} from "@mantine/core";
import React from "react";
import {useHover} from "@mantine/hooks";
import {PinkTypingAnimationText} from "@/components/custom/pink-typing-animation-text";

interface HoverTypingAnimationContainerProps extends ContainerProps {
  text: string;
  hoveredText: string;
  delay?: number;
  duration?: number;
}

export function HoverTypingAnimationContainer({
  text,
  hoveredText,
  delay,
  duration,
  ...props
}: HoverTypingAnimationContainerProps) {
  const {hovered, ref} = useHover();
  return (
    <Container ref={ref} {...props}>
      <PinkTypingAnimationText text={hovered ? hoveredText : text}
                               delay={delay ? delay : 0}
                               duration={duration ? duration : 0}/>
    </Container>
  );
}
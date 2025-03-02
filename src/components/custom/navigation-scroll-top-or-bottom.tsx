import {useWindowScroll} from "@mantine/hooks";
import React, {useEffect} from "react";
import {isScrollAtBottomOfPage, waitAndRedirect} from "@/utils/utils";

interface NavigationScrollTopOrBottomProps {
  href: string,
  isTop: boolean,
  redirectDelay?: number
  children?: React.ReactNode
}


export function NavigationScrollTopOrBottom({
  href,
  isTop,
  ...props
}: NavigationScrollTopOrBottomProps) {
  const [scroll] = useWindowScroll();
  const hasScrolled = React.useRef<boolean>(false);

  useEffect(() => {
    if (isTop) {
      if (scroll.y != 0 && !hasScrolled.current) {
        hasScrolled.current = true;
      }
      if (scroll.y == 0 && hasScrolled.current) {
        waitAndRedirect(href, props.redirectDelay);
      }
    }

    if (!isTop) {
      if (isScrollAtBottomOfPage() && hasScrolled.current) {
        waitAndRedirect(href, props.redirectDelay);
      }
      if (!isScrollAtBottomOfPage() && !hasScrolled.current) {
        hasScrolled.current = true;
      }
    }
  }, [href, isTop, props.redirectDelay, scroll.y]);

  return (
    <div>
      {props.children || null}
    </div>
  );
}

// return (
//   <PinkTypingAnimationText
//     text={text}
//     delay={props.typingAnimationDelay ? props.typingAnimationDelay : 0}
//     duration={props.typingDuration ? props.typingDuration : 8}
//   />
// );


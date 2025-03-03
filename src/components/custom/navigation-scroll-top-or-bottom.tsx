import React, {RefObject, useEffect} from "react";
import {waitAndRedirect} from "@/utils/utils";

interface NavigationScrollTopOrBottomProps {
  targetRef?: RefObject<Element | null>,
  href: string,
  isTop?: boolean,
  redirectDelay?: number
  children?: React.ReactNode
}


export function NavigationScrollTopOrBottom({
  targetRef,
  href,
  isTop = false,
  ...props
}: NavigationScrollTopOrBottomProps) {

  useEffect(() => {
    const currentTarget = targetRef?.current;
    if (!currentTarget) return;

    function handleScroll() {
      const currentTarget = targetRef?.current;
      if (!currentTarget) return;

      if (isTop && currentTarget.scrollTop == 0)
        waitAndRedirect(href, props.redirectDelay);

      if (!isTop && currentTarget.scrollTop + currentTarget.clientHeight >= currentTarget.scrollHeight)
        waitAndRedirect(href, props.redirectDelay);
    }

    currentTarget.addEventListener("scroll", handleScroll);

    return () => {
      currentTarget.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {props.children}
    </div>
  );
}

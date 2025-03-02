import {redirect} from "next/navigation";

export function waitAndRedirect(href: string, delay?: number) {
  const timeoutID = setTimeout(() => {
    redirect(href);
  }, delay ? delay : 1000);

  return () => clearTimeout(timeoutID);
}

export function isScrollAtBottomOfPage() {
  const scrollY = window.scrollY || window.pageYOffset; // Standard or IE-specific
  const windowHeight = window.innerHeight;
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );
  return scrollY + windowHeight >= documentHeight - 1; // Tolerance for rounding errors\
}
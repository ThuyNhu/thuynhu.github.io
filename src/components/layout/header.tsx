import Link from "next/link";
import {ThemeToggle} from "@/components/themes/theme-toggle";
import {Logo} from "@/components/logo/logo";


export function SiteHeader() {
  return (<header
    className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container-wrapper">
      <div className="container flex h-14 items-center">
        {/*<MainNav />*/}
        {/*<MobileNav />*/}
        <Link href="/">
          <Logo className="size-5"/>
        </Link>

        <div className="flex flex-1 items-center justify-between gap-4 md:justify-end">
          <ThemeToggle/>
        </div>
      </div>
    </div>
  </header>);
}
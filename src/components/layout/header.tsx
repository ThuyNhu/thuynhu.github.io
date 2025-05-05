import Link from "next/link";
import {ThemeToggle} from "@/components/themes/theme-toggle";
import {Logo} from "@/components/logo/logo";


interface MenuItem {
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
];

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

        <div className="flex flex-1 items-center gap-4 justify-end">
          <div className="w-full flex-1 flex flex-row gap-4 md:w-auto md:flex-none">
            {/*<CommandMenu />*/}
            {menuItems.map((item, index) =>
              <Link key={index} href={item.href}>{item.title}</Link>,
            )}
          </div>
          <ThemeToggle/>
        </div>
      </div>
    </div>
  </header>);
}
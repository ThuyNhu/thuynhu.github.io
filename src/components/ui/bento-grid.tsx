import React, {ComponentPropsWithoutRef, ReactNode} from "react";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ArrowRightIcon} from "lucide-react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name?: string;
  className?: string;
  background?: ReactNode | string;
  Icon?: React.ElementType;
  description?: string;
  href?: string;
  cta?: string;
  showCta?: boolean;
}

const BentoGrid = ({children, className, ...props}: BentoGridProps) => {
  return (
    <div className={cn(
      "grid w-full auto-rows-auto md:auto-rows-[22rem] grid-cols-3 gap-4",
      className,
    )} {...props}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  showCta = cta !== undefined,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl ",
      // light styles
      "bg-background shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-background dark:border-[1px_solid_rgba(255,255,255,.1)] dark:inset-shadow-[0_-20px_80px_-20px_#ffffff1f]",
      className,
    )}
    {...props}
  >
    <div className="[&>img]:absolute [&>img]:w-full [&>img]:h-full [&>img]:object-cover">{
      typeof background === "string"
        // eslint-disable-next-line @next/next/no-img-element
        ? <img src={background} alt={name}/>
        : background
    }</div>
    <div className="absolute z-5 size-full bg-gradient-to-t from-background via-background/75 to-transparent"/>
    <div className="z-10 flex transform-gpu flex-col gap-2 p-6 transition-all duration-300 group-hover:-translate-y-12">
      {Icon && <Icon
        className="size-10 origin-left transform-gpu text-muted-foreground transition-all duration-300 ease-in-out group-hover:scale-75"/>
      }
      <h4 className="text-xl font-semibold text-muted-foreground dark:text-neutral-300">
        {name}
      </h4>
      <p className="text-neutral-400">{description}</p>
    </div>

    <div
      className={cn(
        "absolute z-10 bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      {showCta && (
        <Button variant="default" asChild size="sm" className="mt-8">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="size-4 rtl:rotate-180"/>
          </a>
        </Button>
      )}
    </div>
    <div
      className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"/>
  </div>
);

export {BentoCard, BentoGrid};

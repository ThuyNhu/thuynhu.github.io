import DateTimeText from "@/components/ui/date-time-text";

export function SiteFooter() {
  return (<footer className="sticky top-auto bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container py-4 flex flex-row justify-end text-muted-foreground">
          <DateTimeText/>
        </div>
      </div>
    </footer>
  );
}
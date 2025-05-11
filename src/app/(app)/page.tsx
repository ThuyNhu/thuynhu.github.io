import {BentoCard, BentoGrid} from "@/components/ui/bento-grid";
import {features} from "@/app/(app)/page-data";


export default function HomePage() {
  return (
    <div className="container-wrapper flex flex-1 flex-col">
      <div className="container py-4 flex flex-col items-center gap-8">
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
        <div className="py-8 flex flex-col items-center gap-2 text-muted-foreground">
          <h1>🐶</h1>
          <h6 className="font-normal!">{"In case you haven't realized, I love dogs."}</h6>
        </div>
      </div>
    </div>
  );
}

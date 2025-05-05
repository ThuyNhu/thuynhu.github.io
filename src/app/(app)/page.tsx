import {BentoCard, BentoGrid} from "@/components/ui/bento-grid";
import {features} from "@/app/(app)/page-data";


export default function HomePage() {
  return (
    <div className="container-wrapper flex flex-1 flex-col">
      <div className="container py-4 flex flex-col">
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

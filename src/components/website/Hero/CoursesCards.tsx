import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/data/Courses";
export function CardHoverEffectDemo() {
  return (
    <div className="md:max-w-5xl lg:max-w-6xl p-4 mx-auto ">
      <HoverEffect items={projects} />
    </div>
  );
}


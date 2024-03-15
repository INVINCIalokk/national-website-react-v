
import { cards} from "@/data/Cards";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function LayoutGridDemo() {
  const words = "Our Jewels"
  return (
    <div className="relative flex flex-col items-center bg-gradient-to-br  from-indigo-950 to-indigo-700 h-hero">
      <TextGenerateEffect className="mt-4" words={words}  />
      <LayoutGrid cards={cards} />
    </div>
  );
}

export default LayoutGridDemo
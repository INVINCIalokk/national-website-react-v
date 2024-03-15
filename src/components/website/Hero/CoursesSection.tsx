import { TextGenerateEffect }  from "@/components/ui/text-generate-effect"
import { CardHoverEffectDemo } from "@/components/website/Couses/CoursesCards"

const CoursesSection = () => {
  const words = "Courses We Offer";
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 to-indigo-700">
      <div className="pt-6">
        <TextGenerateEffect words={words}  />
      </div>  
      <CardHoverEffectDemo/>
    </div>
  )
}

export default CoursesSection
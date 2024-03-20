import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import one from "@/assets/1.svg"
import two from "@/assets/2.svg"
import three from "@/assets/3.svg"
import four from "@/assets/4.svg"
import Autoplay from "embla-carousel-autoplay"




const CarouselHero = () => {

  return (
    <Carousel
  plugins={[
    Autoplay({
      delay: 2000,
    }),
  ]} 
  className="rounded-md">
    <CarouselContent>
      {[one, two, three, four].map((imageSrc, index) => (
        <CarouselItem key={index} className="flex items-center justify-center p-4">
          <img src={imageSrc} height={"20%"} width={"80%"} alt="Hero Image" className="rounded-lg" />    
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
  )
}


export default CarouselHero;

  
  
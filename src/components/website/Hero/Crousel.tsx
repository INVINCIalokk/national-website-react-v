import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import one from "@/assets/1.svg"
import two from "@/assets/2.svg"
import three from "@/assets/3.svg"
import Autoplay from "embla-carousel-autoplay"




const CarouselHero = () => {

  return (
    <Carousel
  plugins={[
    Autoplay({
      delay: 2000,
    }),
  ]} 
  className="bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-md shadow-md">
    <CarouselContent>
      {[one, two, three].map((imageSrc, index) => (
        <CarouselItem key={index} className="flex items-center justify-center p-4">
          <img src={imageSrc} height={"20%"} width={"80%"} alt="Hero Image" className="rounded-lg" />    
        </CarouselItem>
      ))}
      <CarouselItem className="flex items-center justify-center p-4 text-white text-5xl font-serif">
          Many More
        </CarouselItem>
    </CarouselContent>
  </Carousel>
  )
}


export default CarouselHero;

  
  
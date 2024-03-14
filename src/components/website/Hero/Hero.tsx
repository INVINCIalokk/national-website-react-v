import {
    Card,
  } from "@/components/ui/card"
import Lg from "@/assets/light-bulb.svg"
import Ex from "@/assets/exams.svg"
import Bt from "@/assets/bootom.svg"
import Rg from "@/assets/road-to-knowledge.svg"
import { Contact2 } from 'lucide-react';
import CarouselHero from "./Crousel";
import { SparklesCore } from "@/components/ui/sparkles";

const HeroSection = () => {
    return (
      <div className="relative bg-gradient-to-br  from-indigo-400 to-indigo-200 md:h-hero" > {/* Responsive container */}
          <div className="h-14"></div>
          <div className="container mb-3">
          <Card
            className="grid relative max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-8 bg-amber-300 p-8 rounded-lg shadow-lg md:gap-16"
          >
            <div className="flex flex-col justify-center z-10 md:order-2 space-y-2">
              <div className="mb-4 md:mb-8">
                <h3 className="text-indigo-950 text-base md:text-lg font-medium">
                  Since 2018
                </h3>
                <h1 className="text-primary font-serif text-5xl md:text-7xl sm:text-6xl  font-bold tracking-tight">
                  NATIONAL ACADEMY
                </h1>
                <div className="absolute h-full w-full left-0 top-0 -z-100">
                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
 
                </div>
                <p className="text-indigo-950 text-base mb-4 md:text-lg">
                  Entrance is the key to success
                </p>
              </div>
              <button className="px-4 py-4 rounded-md font-semibold bg-primary text-primary-foreground text-lg hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                <Contact2 className="mr-2 font-serif font-semibold inline-block" /> Contact Us
              </button>
            </div>
            <div className="flex items-center justify-center md:order-1">
              <CarouselHero />
            </div>
          </Card>
          </div>
          <div className="h-14"></div>
          {/* Mobile version hidden */}
          <div className="hidden md:block">
            <div className="absolute top-64 left-10 opacity-50 -rotate-12">
              <img src={Lg} width={140} height={100} alt="BULB"/>
            </div>
            <div className="absolute top-64 right-8 opacity-50 rotate-12">
              <img src={Ex} width={250} height={100} alt="BULB"/>
            </div>
            <div className="absolute m-8 ml-48 bottom-0 opacity-50">
              <img src={Bt} width={300} height={100} alt="BULB"/>
            </div>
            <div className="absolute m-8 ml-48 bottom-0 opacity-50">
              <img src={Bt} width={300} height={100} alt="BULB"/>
            </div>
            <div className="flex justify-end mr-56 bottom-0 opacity-50">
              <div>
                <img src={Rg} width={250} height={150} alt="BULB"/>
              </div>
            </div>
          </div>
      </div>
    );
  };
  
  export default HeroSection;
  


import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import {TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import AboutUs from "@/assets/AboutUS.svg"
import { Card } from "@/components/ui/card-hover-effect"
import peoppleImage from "@/assets/peopleImage.svg"
import personalised from '@/assets/Personalised.svg'
import upgrading from '@/assets/upgrading.svg'
import Environment from '@/assets/Environment.svg'

const AboutUsSection = () => {
  const words = "National Academy";
  const aboutUsDescription = `At National Academy, we believe every student has the potential to achieve extraordinary things. Our mission is to provide a transformative learning environment that fosters academic excellence, builds strategic thinking, and ignites a passion for success in the JEE, NEET, and NDA examinations. With our proven methodologies, expert faculty, and personalized approach, we empower students to reach their full potential and secure a bright future.`;
  const cards = [
    { image: peoppleImage, text: "Mentored 200+ aspiring minds" },
    { image: personalised, text: "Personalized Learning" },
    { image: upgrading, text: "Continously Upgrading Teaching Methods" },
    { image: Environment, text: "High-achieving learning environment" },
  ];

  return (
    <div id="about" className="flex flex-col items-center bg-gradient-to-br from-indigo-950 to-indigo-700 ">
      <TextGenerateEffect className="mt-4 md:mt-8" words={words} />
      <TypewriterEffectSmooth
        className="text-3xl md:text-4xl"
        words={[{ text: `"Where Aspirations Become Achievements."`, className: "text-white font-serif" }]}
        cursorClassName="text-3xl md:text-6xl"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto items-center justify-center md:mt-4">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <p className="text-xl font-medium text-amber-400 font-serif md:text-3xl md:mt-2">Why choose us ?</p>
          <p className="mt-2 font-mono pb-4 px-2 md:px-28 py-2 text-sm font-semibold text-teal-300 text-center md:text-lg lg:text-xl">{aboutUsDescription}</p>
        </div>
        <div className="col-span-1 flex flex-col px-4 items-center justify-center">
          <img src={AboutUs} alt="Founder" className="mx-auto" height={500} width={500} />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5 px-2 md:gap-10 md:py-10 md:px-20">
        {cards.map(({ image, text }) => (
          <Card key={text}>
            <img src={image} alt="Person" className="mx-auto pb-6" height={100} width={100} />
            <p className="text-center font-bold text-amber-400 uppercase text-base md:text-2xl font-sans">{text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default AboutUsSection
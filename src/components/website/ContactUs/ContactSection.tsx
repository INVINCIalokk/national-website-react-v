import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { PhoneCall, Instagram, AtSign, MapPin, Globe } from 'lucide-react';
import { motion } from "framer-motion";

const ContactSection = () => {
  const words = "Let's Connect!"
  const email = "nationalacademy1211@gmail.com"
  const phoneNumber = "9653660248 / 8692840128"
  const address = "National Academy, Kalyan(East), 421306, India"
  const webAddress = "nationalacademyeducation.com"

  return (
    <div id="contact" className="grid grid-cols-2 bg-gradient-to-br from-indigo-950 to-indigo-700 h-hero items-center">
      <div className="pl-8 pr-8">
        <TextGenerateEffect words={words} className=""/>
        <p className="mt-2 font-mono py-2 text-sm font-semibold text-teal-300 md:text-lg lg:text-xl">
          We'd love to hear from you! Whether you have a question about our programs, want to schedule a consultation to discuss your academic goals, or simply want to say hello and learn more about what Naction Academy can offer you, we're here for you. Our dedicated team is eager to answer your questions, address any concerns you may have, and provide you with the information you need to make an informed decision about your future.</p>
        <ul className="mt-4 list-none p-0">
          <li className="mt-2 flex items-center text-amber-400 font-bold text-lg">
            <PhoneCall className="h-5 w-5 mr-2" /><span className="text-white">Call us at : </span><a href={`tel:${phoneNumber}`}>&nbsp;&nbsp;{phoneNumber}</a>
          </li>
          <li className="mt-2 flex items-center text-amber-400 font-bold text-lg">
            <AtSign className="h-5 w-5 mr-2" /><span className="text-white">Email us at : </span><a href={`mailto:${email}`}>&nbsp;&nbsp;{email}</a>
          </li>
          <li className="mt-2 flex items-center text-amber-400 font-bold text-lg">
            <MapPin className="h-5 w-5 mr-2" /><span className="text-white">Visit us at :</span><a href={`https://www.google.com/maps/dir//NEAR+JAN+KALYAN+HOSPITAL+HAJIMALANG+ROAD,+Pisavali+Ganv,+Kalyan,+Maharashtra+421306/@19.2404773,73.0845035,13.24z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7956e33f84db1:0x36f607f58177916!2m2!1d73.1289228!2d19.2182169?entry=ttu`} target="_blank" rel="noopener noreferrer">&nbsp;&nbsp;{address}</a>
          </li>
          <li className="mt-2 flex items-center text-amber-400 font-bold text-lg">
            <Globe className="h-5 w-5 mr-2" /><span className="text-white">Address on Web :</span><a href={`https://www.${webAddress}`} target="_blank" rel="noopener noreferrer">&nbsp;&nbsp;{webAddress}</a>
          </li>
          <li className="mt-2 flex items-center text-amber-400 font-bold text-lg">
            <Instagram className="h-5 w-5 mr-2" /><span className="text-white">Follow us on Instagram : </span><a href="https://www.instagram.com/national_academy1211" target="_blank" rel="noopener noreferrer">&nbsp;&nbsp;National Academy</a>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <form className="flex flex-col w-full max-w-xl shadow-2xl bg-indigo-950 p-10 rounded-xl mx-auto" style={{fontFamily: 'monospace'}}>
        <h2 className="text-amber-400 font-bold text-2xl mb-4">Get In Touch</h2>
          <label htmlFor="name" className="text-amber-400 font-mono text-lg mb-2">Name</label>
          <input type="text" id="name" className="border-2 border-indigo-800 p-2 rounded-lg mb-4" />

          <label htmlFor="mobile" className="text-amber-400 font-mono text-lg mb-2">Mobile Number</label>
          <input type="tel" id="mobile" className="border-2 border-indigo-800 p-2 rounded-lg mb-4" />

          <label htmlFor="email" className="text-amber-400 font-mono text-lg mb-2">Email</label>
          <input type="email" id="email" className="border-2 border-indigo-800 p-2 rounded-lg mb-4" />

          <button className="bg-primary/50 hover:bg-primary text-white text-2xl font-semibold px-6 py-3 rounded-lg w-full mt-4 transition duration-200 ease-in-out" type="submit">
            <motion.span
              animate={{scale: [1,1.2,1,1.2], rotate: [0, -10, 0, 10], y: [0,-5, 0, -5]}}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeatType: 'mirror',
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <span className="ml-2">Submit</span>
            </motion.span>
            &#8594;
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection


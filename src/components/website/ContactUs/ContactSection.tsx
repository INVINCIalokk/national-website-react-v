import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { PhoneCall, Instagram, AtSign, MapPin, Globe } from 'lucide-react';
import { motion } from "framer-motion";

const ContactSection = () => {
  const contactData = [
    { icon: PhoneCall, text: "Call us at :", text2: "9653660248 / 8692840128" },
    { icon: AtSign, text: "Email us at :", text2: "nationalacademy1211@gmail.com" },
    { icon: MapPin, text: "Visit us at :", text2: "National Academy, Kalyan(East), 421306, India", href: "https://www.google.com/maps/search/?api=1&query=National+Academy,+Kalyan(East),+421306,+India" },
    { icon: Globe, text: "Address on Web :", text2: "nationalacademyeducation.com", href: "https://nationalacademyeducation.com" },
    { icon: Instagram, text: "Follow us on Instagram :", text2: "national_academy1211", href: "https://www.instagram.com/national_academy1211" },
  ];

  return (
    <div id="contact" className="grid md:grid-cols-2 bg-gradient-to-br from-indigo-950 to-indigo-700 md:h-hero items-center">
      <div className="pl-8 pr-8">
        <TextGenerateEffect words="Let's Connect!" className="" />
        <p className="mt-2 mr-8 font-mono py-2 text-sm font-medium md:font-semibold text-teal-300 md:text-lg lg:text-xl">
          We'd love to hear from you! Whether you have a question about our programs, want to schedule a consultation to discuss your academic goals, or simply want to say hello and learn more about what Naction Academy can offer you, we're here for you. Our dedicated team is eager to answer your questions, address any concerns you may have, and provide you with the information you need to make an informed decision about your future.</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          {contactData.map(({ icon: Icon, text, href, text2 }, index) => (
            <a
              key={index}
              href={href || "#"}
              target={href ? "_blank" : ""}
              rel={href ? "noopener noreferrer" : ""}
              className="mt-2 flex items-center text-amber-400 font-bold text-base"
            >
              <Icon className="h-8 w-8 mr-2" />
              <span className="text-amber-400 pr-2">{text}</span>
              <span className="text-white">{href ? <a href={href} className="text-white font-semibold underline">{text2}</a> : text2}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="container my-4">
      <form className="flex overflow-hidden flex-col w-full max-w-xl shadow-2xl bg-indigo-950 p-10 rounded-xl mx-auto" style={{fontFamily: 'monospace'}}>
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


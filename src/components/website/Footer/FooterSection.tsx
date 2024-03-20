import { Instagram } from "lucide-react";
import { MailIcon } from "lucide-react"; 
import { Globe2 } from "lucide-react";
import { Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const FooterSection = () => (
  <footer className="bg-indigo-950 flex flex-col md:flex-row items-center justify-center">
    <div className="container mx-auto px-4 py-4">
    <p className="text-gray-400">
      © 2023 National Academy. All rights reserved.
    </p>
    <p className="text-cyan-400 font-mono font-semibold">
      Designed and Developed by <span className="text-teal-300"> @  Alok Choudhary</span> 
    </p>
    </div>
    <div className="flex pb-4 md:pb-0 md:pr-32 items-center space-x-4 text-teal-300">
        <a href="mailto:alokc8502@gmail.com">
            <MailIcon className="h-6 w-6"/>
        </a>
        <a href="https://www.instagram.com/invincialok/">
            <Instagram className="h-6 w-6"/>
        </a>
        <a href="#">
            <Globe2 className="h-6 w-6"/>
        </a>
        <a href="https://www.linkedin.com/in/alok-choudhary-116884222/">
            <Linkedin className="h-6 w-6"/>
        </a>
        <a href="https://twitter.com/INVINCIalok">
            <FaXTwitter className="h-6 w-6"/>
        </a>
    </div>
  </footer>
);

export default FooterSection
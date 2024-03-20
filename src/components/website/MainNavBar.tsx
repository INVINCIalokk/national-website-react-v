
import { ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Links } from "@/data/Links";
import logo from '@/assets/logo.png'

export const MainNavBar = () => {
    return (
      
      <header className="sticky top-0 flex flex-col md:flex-row  border-b bg-slate-50/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="flex justify-between items-center px-4 md:px-12 py-1 w-full">
            <a href="#home" className="flex items-center text-xl sm:text-2xl font-bold text-primary space-x-2">
              <Avatar className="h-11 w-11">
                <AvatarImage src={logo} />
                <AvatarFallback>NA</AvatarFallback>
              </Avatar>
              <h1 className='md:text-2xl font-serif md:p-2 font-bold'>NATIONAL ACADMEY</h1>
            </a>
            <nav className="flex justify-center items-center space-x-2  ">
            <div className='hidden md:flex space-x-2'>
              {Links.map(({ href, text }) => (
                <a key={href} href={href} className="text-sm font-semibold text-primary bg-gray-50 p-2 rounded-lg hover:text-white hover:bg-indigo-800">{text}</a>
              ))}
            </div>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-primary rounded-lg" />
                <div className="flex py-2 px-4 md:px-6 md:py-2  bg-indigo-800 font-medium md:font-semibold rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Learn
                  <ChevronRight className="ml-2 inline-block group-hover:translate-x-1 transition duration-200" />
                </div>
            </button>
            </nav> 
            </div> 
            <div className='flex md:hidden space-x-1 px-2 py-2'> 
              {Links.map(({ href, text }) => (
                <a key={href} href={href} className="text-[12px] font-medium text-primary bg-gray-50 p-1 rounded-lg md:text-sm hover:text-white hover:bg-indigo-800">{text}</a>
              ))}
            </div> 
      </header>
      
      // </div>
    )
  }
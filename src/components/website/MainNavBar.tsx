
import { ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Links } from "@/data/Links";

export const MainNavBar = () => {
    return (
      <header className="flex sticky top-0 border-b bg-slate-50/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 justify-between items-center px-4 md:px-12 py-1 w-full z-50">
            <a href="/" className="flex items-center text-xl sm:text-2xl font-bold text-primary space-x-2">
              <Avatar className="h-11 w-11">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>NA</AvatarFallback>
              </Avatar>
              <h1 className='md:text-2xl font-serif md:p-2 font-bold'>NATIONAL ACADMEY</h1>
            </a>
            <nav className="hidden md:flex justify-center items-center space-x-2 ">
            <>
              {Links.map(({ href, text }) => (
                <a key={href} href={href} className="text-sm font-semibold text-primary bg-gray-50 p-2 rounded-lg hover:text-white hover:bg-indigo-800">{text}</a>
              ))}
            </>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-primary rounded-lg" />
                <div className="px-6 py-2  bg-indigo-800 font-semibold rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Learn
                  <ChevronRight className="ml-2 inline-block group-hover:translate-x-1 transition duration-200" />
                </div>
            </button>
            </nav>   
      </header>
    )
  }
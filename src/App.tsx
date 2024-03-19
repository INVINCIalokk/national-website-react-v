import CoursesSection from './components/website/Couses/CoursesSection'
import HeroSection from './components/website/Hero/Hero'
import { MainNavBar } from './components/website/MainNavBar'
import SecondaryNavBar from './components/website/SecondaryNavBar'
import { ThemeProvider } from "@/components/Theme-provider"
import { TracingBeam } from './components/ui/tracing-beam';
import  LayoutGridDemo from './components/website/Toppers/ToppersSection';
import TestimonialSection from './components/website/Testimonials/TestimonialSection'
import AboutUsSection from './components/website/About_Us/AboutUsSection'


function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SecondaryNavBar/>
      <TracingBeam>
        <MainNavBar/>
        <HeroSection/>
        <CoursesSection/>
        <LayoutGridDemo/>
        <TestimonialSection/>
        <AboutUsSection/>
      </TracingBeam>
    </ThemeProvider>
  )
}

export default App

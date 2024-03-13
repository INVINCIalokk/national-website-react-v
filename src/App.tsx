import CoursesSection from './components/website/Couses/CoursesSection'
import HeroSection from './components/website/Hero/Hero'
import { MainNavBar } from './components/website/MainNavBar'
import SecondaryNavBar from './components/website/SecondaryNavBar'
import { ThemeProvider } from "@/components/Theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SecondaryNavBar/>
        <MainNavBar/>
        <HeroSection/>
        <CoursesSection/>
    </ThemeProvider>
  )
}

export default App

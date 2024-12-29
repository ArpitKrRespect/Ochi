import About from "./Components/About"
import Cards from "./Components/Cards"
import Eyes from "./Components/Eyes"
import FeaturedSection from "./Components/FeaturedSection"
import LandingPage from "./Components/LandingPage"
import Marquee from "./Components/Marquee"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <>
      <div className=" w-full h-full text-cyan-600 "> 
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
        <Eyes/>
        <FeaturedSection/>
        <Cards/>
      </div>
      
    </>
  )
}

export default App
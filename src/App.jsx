import About from "./Components/About"
import Cards from "./Components/Cards"
import Eyes from "./Components/Eyes"
import FeaturedSection from "./Components/FeaturedSection"
import Footer from "./Components/Footer"
import LandingPage from "./Components/LandingPage"
import Marquee from "./Components/Marquee"
import Navbar from "./Components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';




const App = () => {

  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();


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
        <Footer/>
      </div>
      
    </>
  )
}

export default App
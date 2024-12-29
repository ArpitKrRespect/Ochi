import About from "./Components/About"
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
      </div>
      
    </>
  )
}

export default App
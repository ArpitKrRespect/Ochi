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
      </div>
      
    </>
  )
}

export default App
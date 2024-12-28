import LandingPage from "./Components/LandingPage"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <>
      <div className=" w-full h-screen text-cyan-600 "> 
        <Navbar/>
        <LandingPage/>
      </div>
      
    </>
  )
}

export default App
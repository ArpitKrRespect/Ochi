import { motion } from "framer-motion";
import { ImArrowUpRight2 } from "react-icons/im";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true when the component has mounted
    setIsLoaded(true);
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.3' 
         className="h-screen w-full pt-1 bg-zinc-900">
      <div className="textstructure mt-52 px-6 md:px-20">
        {["We Create", "Eye-Opening", "Websites"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center">
              {/* Conditional animation for middle text */}
              {index === 1 && isLoaded && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.64, 0, 0.78, 0], duration: 1.5 }}
                  className="w-[5.5vw] h-[4.5vw] mt-[0.5vw] mr-1 bg-[url('/Images/BlockAnimation.jpg')] bg-cover bg-center rounded-sm"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></motion.div>
              )}
              {/* Heading Text */}
              <h1 className="uppercase w-full flex text-nowrap leading-[5.5vw] text-[7vw] tracking-tight font-founders mb-0">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="border-t-2 border-zinc-800 mt-20 w-full flex justify-between items-center py-5 px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between w-full md:w-[50%] gap-8 md:gap-20 mb-6">
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p key={index} className="text-md font-light tracking-tight leading-tight text-white">
              {item}
            </p>
          ))}
        </div>

        {/* Start Project Button and Icon */}
        <div className="start flex justify-center items-center gap-4 md:gap-6 group">
          {/* Start Project Button */}
          <button className="px-6 py-3 border-2 border-zinc-600 rounded-full uppercase text-md font-semibold text-white group-hover:bg-zinc-200 group-hover:text-zinc-900 transition-colors duration-200 ease-in-out">
            Start Project
          </button>

          {/* Icon */}
          <div className="border-2 border-zinc-600 rounded-full flex items-center justify-center text-blue-100 bg-inherit text-xl group-hover:bg-zinc-200 group-hover:text-black transition-colors duration-200 ease-in-out">
            <span className="text-2xl rounded-full">
              <ImArrowUpRight2 className="text-2xl px-2 size-10 py-2 rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-200 ease-in-out" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

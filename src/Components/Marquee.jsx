import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.2.5' className="w-full py-20 bg-[#004D43] rounded-3xl">
      <div className="border-t-2 border-b-2 border-zinc-300 bg-[#004D43] flex text-[216px] overflow-hidden leading-none font-founders whitespace-nowrap">
        <motion.h1 
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 6, // Slow down the motion by increasing the duration
            delay: 0
          }}
          className="bg-[#004D43] text-zinc-300 pr-20 "
        >
          WE ARE OCHI  
        </motion.h1>

        <motion.h1 
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 6, // Slow down the motion by increasing the duration
            delay: 0
          }}
          className="bg-[#004D43] text-zinc-300 pr-20 "
        >
          WE ARE OCHI  
        </motion.h1>

        <motion.h1 
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 6, // Slow down the motion by increasing the duration
            delay: 0
          }}
          className="bg-[#004D43] text-zinc-300 pr-20 "
        >
          WE ARE OCHI  
        </motion.h1>

        <motion.h1 
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 6, // Slow down the motion by increasing the duration
            delay: 0
          }}
          className="bg-[#004D43] text-zinc-300 pr-20 "
        >
          WE ARE OCHI  
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;

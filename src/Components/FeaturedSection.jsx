/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

const FeaturedSection = () => {
  const projects = [
    {
      title: "CARDBOARD SPACESHIP",
      imgSrc: "/Images/CardBoard.png",
    },
    {
      title: "AH2 & Matt Horn",
      imgSrc: "/Images/AH2MATTHORN.png",
    },
    {
      title: "Fyde",
      imgSrc: "/Images/FYDE.png",
    },
    {
      title: "Vise",
      imgSrc: "/Images/Vise.jpg",
    },
    {
      title: "trawa",
      imgSrc: "/Images/Trawa.jpg",
    },
    {
      title: "Primium Blend",
      imgSrc: "/Images/PrimiumBlend.png",
    },
  ];

  return (
    <div className="w-full bg-zinc-900">
      <h2 className="font-neue p-5 text-xl">Featured Projects</h2>
      <div className="line w-full border-b-[1px] pb-4"></div>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mt-10 p-5">
        {projects.map((project, index) => (
          <FeaturedCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const FeaturedCard = ({ project, index }) => {
  const [isHovering, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="card-container relative mb-10 h-[45vw]"
    >
      <div className="header mb-2 flex gap-2 items-center">
        <div className="h-[10px] w-[10px] rounded-full bg-cyan-800"></div>
        <div className="title font-neue uppercase">{project.title}</div>
      </div>

      {isHovering && (
        <h1
          className={`Headingmasker absolute flex top-1/2 ${
            index % 2 !== 0 ? 'right-full translate-x-1/2' : 'left-full -translate-x-1/2'
          } sm:flex sm:items-center sm:justify-center 
            transform bg-transparent text-[#CDEA68] text-nowrap -translate-y-1/2 text-5xl font-founders overflow-hidden z-[9]`}
        >
          {project.title.split("").map((item, idx) => (
            <motion.span
              initial={{ y: "100%" }}
              animate={isHovering ? { y: 0 } : { y: "100%" }}
              transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.01 }}
              duration="2"
              key={idx}
            >
              {item}
            </motion.span>
          ))}
        </h1>
      )}

      <div className="card w-full h-full rounded-xl mb-10 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-all duration-300 transform hover:scale-105"
          src={project.imgSrc}
          alt={project.title}
        />
      </div>
    </div>
  );
};

export default FeaturedSection;

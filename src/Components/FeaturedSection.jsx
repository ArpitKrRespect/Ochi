
const FeaturedSection = () => {
  const projects = [
    {
      title: "CARDBOARD SPACESHIP",
      imgSrc: "/public/Images/CardBoard.png",
    },
    {
      title: "AH2 & Matt Horn",
      imgSrc: "/public/Images/AH2MATTHORN.png",
    },
    {
      title: "Fyde",
      imgSrc: "/public/Images/FYDE.png",
    },
    {
      title: "Vise",
      imgSrc: "/public/Images/Vise.jpg",
    },
    {
      title: "trawa",
      imgSrc: "/public/Images/Trawa.jpg",
    },
    {
      title: "Primium Blend",
      imgSrc: "/public/Images/PrimiumBlend.png",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="font-neue p-5 text-xl">Featured Projects</h2>
      <div className="line w-full border-b-[1px] pb-4"></div>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mt-10 p-5">
        {projects.map((project, index) => (
          <div key={index} className="card-container relative mb-10 h-[45vw]">
            <div className="header mb-2 flex gap-2 items-center">
              <div className="h-[10px] w-[10px] rounded-full bg-cyan-800"></div>
              <div className="title font-neue uppercase">{project.title}</div>
            </div>
            <h1 className={`Headingmasker absolute top-1/2 ${index % 2 !== 0 ? 'right-full translate-x-1/2' : 'left-full -translate-x-1/2'} transform bg-transparent text-[#CDEA68] text-nowrap -translate-y-1/2 text-5xl font-founders z-[9]`}>
              {project.title.split("").map((item,index)=>(
                <span className="bg-transparent" key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl mb-10 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={project.imgSrc}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;

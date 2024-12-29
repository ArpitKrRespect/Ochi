import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="h-screen w-full pt-1">
      <div className="textstructure mt-52 px-20">
  {["We Create", "Eye Opening", "Websites"].map((item, index) => (
    <div className="masker" key={index}>
      <div className="w-fit flex items-center">
        {index === 1 && (
          <div 
            className="w-[7vw] h-[4.5vw] mt-[0.5vw] mr-1 bg-red-900 bg-[url('/Images/BlockAnimation.jpg')] bg-cover bg-center rounded-sm"
            style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
          ></div>
        )}
        <h1 className="uppercase leading-[5.5vw] text-[7vw] tracking-tight font-founders mb-0">
          {item}
        </h1>
      </div>
    </div>
  ))}
</div>


      <div className="border-t-2 border-zinc-800 mt-20 w-full flex justify-between items-center py-5 px-10 ">
        <div className="flex flex-col md:flex-row justify-between w-full md:w-[50%] gap-8 md:gap-20 mb-6 ">
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p key={index} className="text-md font-light tracking-tight leading-tight text-white">
              {item}
            </p>
          ))}
        </div>

        <div className="start flex justify-center items-center gap-4 md:gap-6">
          <button className="px-6 py-3 border-2 border-zinc-600 rounded-full uppercase text-md font-semibold text-white hover:bg-zinc-200 hover:text-zinc-900 transition-colors duration-200 ease-in-out">
            Start Project
          </button>

          <div className="px-3 py-3 border-2 border-zinc-600 rounded-full flex items-center justify-center text-white text-xl hover:bg-zinc-200 hover:text-zinc-900 transition-colors duration-200 ease-in-out">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

const About = () => {
    return (
      <div className="w-full py-10 bg-[#CDEA68] rounded-3xl">
        <h1 className="bg-[#CDEA68] text-black font-neue text-3xl leading-none p-5">
          Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className="w-full border-t-[1px] border-black mt-10"></div>
        <div className="w-full py-5 bg-[#CDEA68] flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 bg-[#CDEA68] mb-5 md:mb-0">
            <h1 className="bg-[#CDEA68] text-black font-neue text-3xl leading-none p-5">Our Approach:</h1>
            <button
              className="w-[180px] flex items-center gap-6 font-neue text-xl ml-5 leading-none p-3
                         bg-zinc-800 text-white rounded-full hover:bg-zinc-500 hover:text-white
                         transition duration-300 ease-in-out"
            >
              READ MORE
              <div className="w-3 h-3 border-black rounded-full"></div>
            </button>
          </div>
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
            <img
              src="/Images/Homepage-Photo-663x469.jpg"
              className="rounded-xl w-full h-auto max-h-[300px] object-cover"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  
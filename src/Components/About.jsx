const About = () => {
  return (
    <div id="about"
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full py-16 bg-[#CDEA68] rounded-3xl shadow-xl"
    >
      <h1 className="text-black font-neue bg-[#CDEA68] text-4xl md:text-5xl leading-tight p-6 text-center md:text-left">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products,
        explain complex ideas, and hire great people.
      </h1>
      <div className="w-4/5 mx-auto border-t-[2px] bg-[#CDEA68] border-black mt-10"></div>
      <div className="w-full py-8 flex flex-col md:flex-row bg-[#CDEA68] justify-between items-center gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 bg-transparent">
          <h2 className="text-black font-neue text-3xl md:text-4xl bg-[#CDEA68] leading-tight p-5">Our Approach:</h2>
          <p className="text-black font-light bg-[#CDEA68] text-lg leading-relaxed px-5 mb-6">
            We craft visually compelling, strategically effective presentations tailored to your audience. Discover how
            we transform ideas into impactful stories.
          </p>
          <button
            className="w-[200px] flex items-center gap-4 font-neue text-xl ml-5 leading-none p-3
                       bg-black text-white rounded-full hover:bg-zinc-700 hover:text-gray-100
                       transition duration-300 ease-in-out shadow-md"
          >
            READ MORE
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </button>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            src="/Images/Homepage-Photo-663x469.jpg"
            className="rounded-xl w-full h-full object-cover"
            alt="About Us"
          />
        </div>
      </div>
      {/* Decorative SVG or Accent */}
      <div className="absolute top-10 left-5 w-16 h-16 bg-[#F3E8A8] rounded-full shadow-lg animate-bounce"></div>
      <div className="absolute bottom-10 right-5 w-16 h-16 bg-[#A6D49F] rounded-full shadow-lg animate-bounce"></div>
    </div>
  );
};

export default About;

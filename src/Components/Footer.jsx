const Footer = () => {
    return (
      <footer className="p-10 mt-10 bg-gray-900 text-white">
        <div className="flex flex-wrap justify-between gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-1/3">
            <div className="uppercase font-founders text-[8vw] leading-none">
              <h1>Eye-</h1>
              <h1>Opening</h1>
              <h1>Presentations</h1>
              
            </div>
            <svg
              width="72"
              height="30"
              viewBox="0 0 72 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#CDEA68] mt-5"
              aria-label="Decorative icon"
            >
              <path
                d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.871..."
                fill="currentColor"
              ></path>
            </svg>
          </div>
  
          {/* Center Section */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-[3vw] font-bold mb-5">Quick Links</h2>
            <ul className="space-y-3 text-xl">
              <li>
                <a href="#" className="text-[#CDEA68] hover:text-green-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CDEA68] hover:text-green-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CDEA68] hover:text-green-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CDEA68] hover:text-green-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Right Section */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-[3vw] font-bold mb-5">Contact Us</h2>
            <p className="mb-2">
              <strong>Email:</strong> <a href="mailto:info@example.com" className="text-[#CDEA68] hover:text-green-300">info@example.com</a>
            </p>
            <p className="mb-5">
              <strong>Phone:</strong> <a href="tel:+123456789" className="text-[#CDEA68] hover:text-green-300">+123 456 789</a>
            </p>
            <h2 className="text-[3vw] font-bold mb-5">Newsletter</h2>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring focus:ring-green-300"
              />
              <button className="bg-[#CDEA68] text-gray-900 py-2 px-4 rounded hover:bg-green-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-5 flex flex-wrap justify-between text-sm">
          <p>© {new Date().getFullYear()} Eye-Opening. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-300">Privacy Policy</a>
            <a href="#" className="hover:text-green-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
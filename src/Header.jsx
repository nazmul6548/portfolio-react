import { FiDownload } from "react-icons/fi";
import StateCount from "./StateCount";

const Header = () => {
    return (
        <div>
              <header className="bg-primary-gradient dark:bg-gray-900">
      <nav className="relative bg-white dark:bg-gray-900">
        <div className="container px-6  mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
           
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div>
           

            <div className="flex justify-center md:block">
             
            </div>
          </div>
        </div>
      </nav>

      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-white dark:text-white lg:text-4xl">Hello, I'am <br /><span className="bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text">NaZMuL ISLAM JuWeL</span></h1>
              
              <p className="mt-3 text-white dark:text-gray-400">Front_End Web Developer</p>
              
              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
  <div className="flex justify-center  items-center gap-2">
  <a href="https://drive.google.com/file/d/1CSsuUrEh5i38u7ttUo1c4symiDefP_bs/view" download="NaZMuL_ISLAM_JuWeL_Resume.pdf">
    Resume 
  </a><FiDownload />
  </div>
</button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img className="w-full h-full lg:max-w-3xl rounded-full " src="https://i.ibb.co/KGk3k5r/Whats-App-Image-2024-06-19-at-3-35-54-PM-removebg.png" alt="Catalogue-pana.svg" />
          </div>
        </div>
      </div>
      <StateCount></StateCount>
    </header>

        </div>
    );
};

export default Header;
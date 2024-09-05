import { FiDownload } from "react-icons/fi";
import StateCount from "./StateCount";
import { Fade } from "react-awesome-reveal";
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import "./header.css"
import { useRef } from "react";
import { useInView,motion } from "framer-motion";
const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div>
      
        <header className="bg-primary-gradient dark:bg-gray-900">
          <nav className="relative bg-white dark:bg-gray-900">
            <div className="container px-6  mx-auto md:flex md:justify-between md:items-center">
              <div className="flex items-center justify-between"></div>

           
              <div>
                <div className="flex justify-center md:block"></div>
              </div>
            </div>
          </nav>
          <Fade cascade>
          <div className="container px-6 py-16 mx-auto">
            <div className="pt-10 md:pt-20 items-center lg:flex">
              <div className="w-full lg:w-1/2">
                <div className=" mt-5 md:ml-10 lg:max-w-lg">
                 
                  <h1 className="text-2xl md:text-3xl font-semibold text-white dark:text-white lg:text-4xl">
  Hello, I'am <br />
  <span className="relative md:mt-3 inline-block bg-gradient-to-r from-[#8750f7] to-[#a91079] bg-clip-text text-transparent">
    <Typewriter
      options={{
        strings: ['NaZMuL ISLAM JuWeL'],
        autoStart: true,
        delay: 75,
        deleteSpeed: 50,
        pauseFor: 2000,
        cursor: '|',
        startDelay: 500,
        loop: true,
      }}
    />
  </span>
</h1>


<motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
            <p className="mt-2 md:mt-4 text-justify text-xs md:text-sm text-white dark:text-gray-400">
                    I am a passionate web developer. Over the past eight months,
                    I have been dedicated to honing my skills in web
                    development, focusing on both frontend and backend
                    technologies. <br />I am committed to advancing my skills
                    and taking on new challenges in the web development field.
                    My goal is to continuously improve and stay updated with the
                    latest industry trends, ultimately becoming an expert in
                    full-stack development.
                  </p>
          </motion.div>

                 
                  <a
  href="https://drive.google.com/file/d/1CSsuUrEh5i38u7ttUo1c4symiDefP_bs/view"
  target="_blank"
  download="NaZMuL_ISLAM_JuWeL_Resume.pdf"
  className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gradient-to-r from-[#8750f7] to-[#a91079] rounded-lg lg:w-auto hover:bg-[#27124d] focus:outline-none focus:bg-blue-500 flex justify-center items-center gap-2"
>
  Resume
  <FiDownload />
</a>

                </div>
              </div>

              


             
<div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 object-cover">
<motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
           <div className="relative rounded-full w-[300px] md:w-[350px] h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden border-8 border-transparent animate-rotateBorder shadow-animate">
    <img
      className="w-full h-full rounded-full object-cover"
      src="https://i.ibb.co/KGk3k5r/Whats-App-Image-2024-06-19-at-3-35-54-PM-removebg.png"
      alt="Catalogue-pana.svg"
    />
  </div>
          </motion.div>
</div>


            </div>
          </div>
      </Fade>
          <StateCount></StateCount>
        </header>
    </div>
  );
};

export default Header;

import { useRef } from "react";
import Portfolio from "./ProjectShowcase";
import { useInView } from "framer-motion";
import "animate.css";
import { motion } from "framer-motion";

const ProjectShowcaseParent = () => {
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
        <div className="bg-[#281350] to from-[#01003a] pb-16">
            
            {/* <h1 className="text-white text-4xl text-center font-bold p-4">Project Showcase</h1> */}
            <div className="text-center relative">
                    <h2 className=" pt-10 merriweather-regular text-3xl md:text-4xl bg-gradient-to-r from-[#8750f7] to-[#a91079] text-transparent bg-clip-text font-extrabold text-[#333] inline-block relative">
                        Project Showcase
                        <span className="absolute left-0 right-0 bottom-[-10px] h-1 bg-gradient-to-r from-[#8750f7] to-[#a91079] rounded-full md:animate-slideUnderline"></span>
                    </h2>
                    <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
            <p className="poppins-extralight text-xs md:text-sm text-white pt-6 md:pt-10 text-justify md:text-center   mr-4 ml-4 md:w-3/4 md:m-auto">Project Showcase is a platform where you can present your work, skills, and achievements through engaging, interactive displays. It highlights your best projects, allowing you to share your expertise and attract potential opportunities.</p>
          </motion.div>
         
                </div>
         
            
            <Portfolio></Portfolio>
           {/* </div> */}
        </div>
    );
};

export default ProjectShowcaseParent;
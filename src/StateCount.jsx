import { useInView ,motion} from "framer-motion";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";


const StateCount = () => {
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
          <Fade cascade >
            <div className="   min-h-[350px] flex items-center justify-center font-[sans-serif] text-[#333]">
  <div className=" shadow-[0_4px_24px_-8px_rgba(0,0,0,1.2)] grid grid-cols-2 md:grid-cols-4  gap-36 md:gap-20 rounded-3xl px-16 py-10">
  <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
            <div className="text-center">
      <h3 className="text-4xl font-extrabold text-white">01<span className="text-[#a91079]">Y+</span></h3>
      <p className="text-gray-500 font-semibold mt-3">Experience</p>
    </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
           <div className="text-center">
      <h3 className="text-4xl font-extrabold text-white">13<span className="text-[#a91079]">+</span></h3>
      <p className="text-gray-500 font-semibold mt-3">Projects</p>
    </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
            <div className="text-center">
      <h3 className="text-4xl font-extrabold text-white">03<span className="text-[#a91079]">+</span></h3>
      <p className="text-gray-500 font-semibold mt-3">MERN Projects</p>
    </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
            <div className="text-center">
      <h3 className="text-4xl font-extrabold text-white">11<span className="text-[#a91079]">+</span></h3>
      <p className="text-gray-500 font-semibold mt-3">Tailwind projects</p>
    </div>
          </motion.div>
  </div>
</div>
</Fade>
        </div>
    );
};

export default StateCount;
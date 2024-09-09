
import { Fade } from "react-awesome-reveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MyEducation = () => {
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
    <div id="educations">
      <div className="bg-primary-gradient pt-20 px-4 pb-20 font-sans-serif text-[#333]">
        <div className="text-center relative">

          <h2 className="merriweather-regular text-3xl md:text-4xl bg-gradient-to-r from-[#8750f7] to-[#a91079] text-transparent bg-clip-text font-extrabold inline-block relative">
            My Education
            <span className="absolute left-0 right-0 bottom-[-10px] h-1 bg-gradient-to-r from-[#8750f7] to-[#a91079] rounded-full md:animate-slideUnderline"></span>
          </h2>
          

          {/* Framer Motion Paragraph */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
            <p className="poppins-extralight  text-xs md:text-sm text-white pt-6 md:pt-10 text-justify md:text-center mr-4 ml-4 md:w-3/5 md:m-auto">
              I am currently advancing my studies with a Master’s degree, following the completion of my Bachelor’s in Social Sciences. My educational background includes a strong foundation in Science from my earlier academic years, which has fostered my analytical and problem-solving abilities.
            </p>
          </motion.div>
          
          <div className="w-[160px] h-[140px] flex justify-center items-center m-auto">
  <img
    src="https://i.ibb.co/qFfsDN7/Animation-1725603013574-2.gif"
    alt=""
    className="w-full h-full"
  />
</div>
        </div>

        {/* react-awesome-reveal Fade for Education Cards */}
        <Fade cascade>
          <div className="grid sm:grid-cols-2 pt-12 gap-6 max-w-6xl mx-auto">
            {[
              { year: "2021", title: "Masters (admitted)", school: "National University" },
              { year: "2017-2021", title: "Hon's Complete (BSS)", school: "National University" },
              { year: "2015-2017", title: "HSC (Science)", school: "Ahsanullah College" },
              { year: "2013-2015", title: "SSC (Science)", school: "Bishwa Darbar High School" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1e1034] hover:bg-primary-gradient text-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)] transition-all duration-500 ease-in-out"
              >
                <div>
                  <p className="text-[#9b6ef8] text-xl font-bold poppins-extralight">{item.year}</p>
                  <h1 className="font-bold text-2xl md:text-3xl merriweather-regular">{item.title}</h1>
                  <p className="text-sm mt-2 poppins-extralight">{item.school}</p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MyEducation;


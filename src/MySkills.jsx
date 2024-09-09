import { useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Autoplay, Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Tooltip as ReactTooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css"; // Include the tooltip CSS
import "./skill.css";
import { useInView,motion } from "framer-motion";

const MySkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  

  const swiperRef = useRef(null);

  const skillsData = [
    {
      title: "HTML",
      imgSrc: "https://svgshare.com/i/1A4Q.svg",
      description: "The standard markup language used to create web pages.",
    },
    {
      title: "CSS",
      imgSrc: "https://svgshare.com/i/1A3F.svg",
      description:
        "A style sheet language used for describing the presentation of a document written in HTML.",
    },
    {
      title: "Tailwind CSS",
      imgSrc: "https://svgshare.com/i/1A3X.svg",
      description:
        "A utility-first CSS framework for building custom designs quickly.",
    },
    {
      title: "JavaScript",
      imgSrc: "https://svgshare.com/i/1A2X.svg",
      description:
        "A programming language that allows you to implement complex things on web pages.",
    },
    {
      title: "React",
      imgSrc: "https://svgshare.com/i/1A1z.svg",
      description:
        "A JavaScript library for building user interfaces, especially for single-page applications.",
    },
    {
      title: "Node.js",
      imgSrc: "https://svgshare.com/i/1A3L.svg",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side scripting.",
    },
    {
      title: "MongoDB",
      imgSrc: "https://svgshare.com/i/1A2d.svg",
      description:
        "A NoSQL database that uses JSON-like documents to store data.",
    },
    {
      title: "Express.js",
      imgSrc: "https://svgshare.com/i/1A3u.svg",
      description:
        "A minimal and flexible Node.js web application framework for building APIs.",
    },
    {
      title: "Firebase",
      imgSrc: "https://svgshare.com/i/1A20.svg",
      description:
        "A platform developed by Google for creating mobile and web applications with integrated cloud services.",
    },
    {
      title: "VS Code",
      imgSrc: "https://svgshare.com/i/1A0u.svg",
      description:
        "A source-code editor developed by Microsoft for Windows, macOS, and Linux.",
    },
    {
      title: "Git",
      imgSrc: "https://svgshare.com/i/1A1p.svg",
      description:
        "A distributed version control system for tracking changes in source code.",
    },
    {
      title: "GitHub",
      imgSrc: "https://svgshare.com/i/1A2u.svg",
      description:
        "A web-based interface that uses Git for version control, allowing developers to collaborate on projects.",
    },
    {
      title: "Next.js",
      imgSrc: "https://svgshare.com/i/1A4D.svg",
      description:
        "A React framework that enables server-side rendering and static web applications.",
    },
    {
      title: "Stripe",
      imgSrc: "https://svgshare.com/i/1A2n.svg",
      description:
        "An online payment processing platform for internet businesses.",
    },
    {
      title: "Microsoft",
      imgSrc: "https://svgshare.com/i/1A1R.svg",
      description:
        "A multinational technology company that produces computer software, consumer electronics, and personal computers.",
    },
    {
      title: "Figma",
      imgSrc: "https://svgshare.com/i/1A3j.svg",
      description:
        "A web-based design tool for user interface and user experience design.",
    },
    {
      title: "Canva",
      imgSrc: "https://svgshare.com/i/1A3E.svg",
      description:
        "A graphic design platform that allows users to create social media graphics, presentations, and other visual content.",
    },
    {
      title: "React Router",
      imgSrc: "https://svgshare.com/i/1A2t.svg",
      description:
        "A routing library for React that enables navigation among views of various components in a React application.",
    },
  ];
  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const [slides] = useState(skillsData);

  return (
    <div id="skills">
      <div className="font-[sans-serif] bg-[#1d0e35]">
        <div className="max-w-7xl mx-auto py-16">
          <div className="text-center relative">
            <h2 className="merriweather-regular text-3xl md:text-4xl bg-gradient-to-r from-[#8750f7] to-[#a91079] text-transparent bg-clip-text font-extrabold text-[#333] inline-block relative">
              My Skills
              <span className="absolute left-0 right-0 bottom-[-10px] h-1 bg-gradient-to-r from-[#8750f7] to-[#a91079] rounded-full md:animate-slideUnderline"></span>
            </h2>
           

            <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
            <p className="poppins-extralight text-xs md:text-sm text-white pt-6 md:pt-10 text-justify md:text-center   mr-4 ml-4 md:w-3/4 md:m-auto">
              I’m dedicated to crafting exceptional web experiences, blending
              creativity with technical expertise. My skills span HTML, CSS, and
              JavaScript, along with cutting-edge frameworks like React.js. I
              excel at creating visually stunning and highly functional designs,
              ensuring every project is both engaging and effective.
            </p>
          </motion.div>

          </div>

          
            <Swiper
              modules={[Virtual, Navigation, Pagination, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={6}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                425: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },

                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },

                1280: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
            >
              {skillsData.map((slideContent, index) => (
                <SwiperSlide key={index} virtualIndex={index}>
                  <Fade cascade>
                  <div
                    className="p-6 bg-white rounded-tr-[90px] shadow-lg text-center w-[200px] h-[200px] hover:bg-purple-100 relative bottom-6 left-0 right-0"
                      
                    data-tooltip-id={`tooltip-${index}`}
                    data-tooltip-content={slideContent.description}
                  >
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4">
                      <img
                        src={slideContent.imgSrc}
                        alt={slideContent.title}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold poppins-extralight">{slideContent.title}</h3>
                  </div>
                



                  </Fade>

                  <ReactTooltip
                    id={`tooltip-${index}`}
                    place="bottom"
                    effect="solid"
                    className="custom-tooltip"
                    event="click"
                    eventOff="mouseleave"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          
        </div>
      </div>
    </div>
  );
};

export default MySkills;

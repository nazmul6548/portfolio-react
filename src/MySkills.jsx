import { useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Autoplay, Virtual, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./skill.css";

const MySkills = () => {
  // const [setSwiperRef] = useState(null);
  const swiperRef = useRef(null);

  const skillsData = [
    {
      title: "HTML",

      imgSrc: "https://svgshare.com/i/1A4Q.svg",
    },
    {
      title: "CSS",

      imgSrc: "https://svgshare.com/i/1A3F.svg",
    },
    {
      title: "Tailwind CSS",

      imgSrc: "https://svgshare.com/i/1A3X.svg",
    },
    {
      title: "JavaScript",

      imgSrc: "https://svgshare.com/i/1A2X.svg",
    },
    {
      title: "React",

      imgSrc: "https://svgshare.com/i/1A1z.svg",
    },
    {
      title: "Node.js",

      imgSrc: "https://svgshare.com/i/1A3L.svg",
    },
    {
      title: "MongoDB",

      imgSrc: "https://svgshare.com/i/1A2d.svg",
    },
    {
      title: "Express.js",

      imgSrc: "https://svgshare.com/i/1A3u.svg",
    },
    {
      title: "Firebase",

      imgSrc: "https://svgshare.com/i/1A20.svg",
    },
    {
      title: "VS Code",

      imgSrc: "https://svgshare.com/i/1A0u.svg",
    },
    {
      title: "Git",

      imgSrc: "https://svgshare.com/i/1A1p.svg",
    },
    {
      title: "GitHub",

      imgSrc: "https://svgshare.com/i/1A2u.svg",
    },
    {
      title: "Next.js",

      imgSrc: "https://svgshare.com/i/1A4D.svg",
    },
    {
      title: "Stripe",

      imgSrc: "https://svgshare.com/i/1A2n.svg",
    },
    {
      title: "Microsoft",

      imgSrc: "https://svgshare.com/i/1A1R.svg",
    },
    {
      title: "Figma",

      imgSrc: "https://svgshare.com/i/1A3j.svg",
    },
    {
      title: "Canva",

      imgSrc: "https://svgshare.com/i/1A3E.svg",
    },
    {
      title: "React Router",

      imgSrc: "https://svgshare.com/i/1A2t.svg",
    },
  ];

  const [slides] = useState(skillsData);

  return (


<div id="skills">
<div className="font-[sans-serif] bg-[#1d0e35]">
  <div className="max-w-7xl mx-auto py-16">
    <div className="text-center relative">
      <h2 className="text-4xl bg-gradient-to-r from-[#8750f7] to-[#a91079] text-transparent bg-clip-text font-extrabold text-[#333] inline-block relative">
        My Skills
        <span className="absolute left-0 right-0 bottom-[-10px] h-1 bg-gradient-to-r from-[#8750f7] to-[#a91079] rounded-full md:animate-slideUnderline"></span>
      </h2>
    </div>

    <Fade cascade>
      <Swiper
        modules={[Virtual, Navigation, Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {skillsData.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className="p-6 bg-white rounded-lg shadow-lg text-center w-[200px] h-[200px]">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4">
                <img
                  src={slideContent.imgSrc}
                  alt={slideContent.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold">{slideContent.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fade>
  </div>
</div>
</div>
    
  );
};

export default MySkills;

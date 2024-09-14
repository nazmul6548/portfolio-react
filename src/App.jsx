
import "./App.css";
import Contract from "./Contract";
import Footer from "./Footer";
import Header from "./Header";
import MyEducation from "./MyEducation";
import MySkills from "./MySkills";
import MyWorks from "./MyWorks";
import Navbar from "./Navbar";
import { motion, useScroll } from "framer-motion";
import { FaArrowsRotate } from "react-icons/fa6";
import TypewriterLoader from "./TypewriterLoader";
import { useState } from "react";






function App() {
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setShowContent(true);
  };

  const { scrollYProgress } = useScroll();

  return (
    <>
        
      {!showContent && <TypewriterLoader onComplete={handleLoaderComplete} />}
      {showContent && (
        <div className="bg-primary-gradient h-screen">
          

          <Navbar />
          <Header />
          <MySkills />
          <MyWorks />
          <MyEducation />
          <Contract />
          <Footer />
          
          {/* Scroll Progress Circle */}
          <div className="fixed  bottom-2 right-4 z-50">
            <svg className="progress-ring" width="50" height="50">
              <circle
                className="progress-ring__circle-bg"
                stroke="lightgray"
                strokeWidth="4"
                fill="transparent"
                r="22"
                cx="25"
                cy="25"
              />
              <motion.circle
                className="progress-ring__circle"
                stroke="DarkMagenta"
                strokeWidth="6"
                fill="transparent"
                r="22"
                cx="25"
                cy="25"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
            <div className="absolute top-4  left-4">
              <FaArrowsRotate className="text-white" size={20} />
            </div>
          </div>
        </div>
      )}
       
    </>
  );
}

export default App;

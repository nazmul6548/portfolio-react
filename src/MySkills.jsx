import { useState } from "react";


const MySkills = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const containerStyle = {
      transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)',
      transition: 'transform 1.3s ease-in-out',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    };
  
    const imgStyle = {
      width: '5rem',
      height: '5rem'
    };
  
    const headingStyle = {
      color: '#4A4A4A',
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.75rem'
    };
    return (
        <div id="skills">
            <div className="bg-[#0f0715] font-[sans-serif]">
  <div className="max-w-6xl mx-auto py-16 ">
    {/* <h2 className="bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text text-4xl font-extrabold text-center mb-16">MY SKILLS</h2> */}
    <div className="text-center relative ">
  <h2 className="text-4xl bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text font-extrabold text-[#333] inline-block relative after:content-[''] after:absolute after:w-6/6 after:h-1 after:left-0 after:right-0 after:bottom-[-10px] after:mx-auto after:bg-[#a91079] after:rounded-full">
    My Skills
  </h2>
</div>

    <div className="grid grid-cols-2 pt-12  md:grid-cols-7  gap-10 mx-auto max-md:max-w-md  justify-center items-center">
    <div className="bg-white hover:bg-[#8750f7] w-32 md:w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div  style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className=" flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17qc.svg"  alt="" style={imgStyle} className="w-20 h-20"/>
          <h3 style={headingStyle} className="text-gray-800 text-xl font-semibold mb-3">Node.js</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-32 md:w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className=" flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17oh.svg" alt="" style={imgStyle} className="w-20 h-20"/>
          <h3 style={headingStyle} className="text-gray-800 text-xl font-semibold mb-3">MongoDB</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-32 md:w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className=" flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17qy.svg" alt="" className="w-20 h-20"/>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">React.js</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-32 md:w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className=" flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17p4.svg" alt="" className="w-20 h-20"/>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">Firebase</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-32 md:w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className=" flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17qz.svg" alt="" className="w-20 h-20"/>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">javaScript</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-32 md:w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className=" flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17pw.svg" alt="" className="w-20 h-20"/>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">VsCode</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-32 md:w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className=" flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17p5.svg" alt="" className="w-20 h-20"/>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">Tailwind</h3>
          
        </div>
      </div>

    </div>
  </div>
</div>
{/*  */}

        </div>
    );
};

export default MySkills;
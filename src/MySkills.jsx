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
        <div>
            <div className="bg-[#0f0715] font-[sans-serif]">
  <div className="max-w-6xl mx-auto py-16 px-4">
    {/* <h2 className="bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text text-4xl font-extrabold text-center mb-16">MY SKILLS</h2> */}
    <div className="text-center relative">
  <h2 className="text-4xl bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text font-extrabold text-[#333] inline-block relative after:content-[''] after:absolute after:w-6/6 after:h-1 after:left-0 after:right-0 after:bottom-[-10px] after:mx-auto after:bg-[#a91079] after:rounded-full">
    My Skills
  </h2>
</div>

    <div className="grid grid-cols-2 pt-12  md:grid-cols-2 lg:grid-cols-7 gap-10  max-md:max-w-md mx-auto">
    <div className="bg-white hover:bg-[#8750f7] w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div  style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="p-8 flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17qc.svg"  alt="" style={imgStyle} className="w-20 h-20"/>
          <h3 style={headingStyle} className="text-gray-800 text-xl font-semibold mb-3">Node.js</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="p-8 flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17oh.svg" alt="" style={imgStyle} className="w-20 h-20"/>
          <h3 style={headingStyle} className="text-gray-800 text-xl font-semibold mb-3">MongoDB</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="p-8 flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17qy.svg" alt="" className="w-20 h-20"/>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">React.js</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="p-8 flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17p4.svg" alt="" className="w-20 h-20"/>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">Firebase</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="p-8 flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17qz.svg" alt="" className="w-20 h-20"/>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">javaScript</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="p-8 flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17pw.svg" alt="" className="w-20 h-20"/>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">Vs Code</h3>
          
        </div>
      </div>
      {/*  */}
      <div className="bg-white hover:bg-[#8750f7] w-40 h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="p-8 flex justify-center items-center flex-col">
          <img src="https://svgshare.com/i/17p5.svg" alt="" className="w-20 h-20"/>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">Tailwind</h3>
          
        </div>
      </div>

      {/* <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div className="p-8">
          <svg xmlns="https://svgshare.com/i/17qc.svg" fill="#007bff" className="w-8 mb-6" viewBox="0 0 682.667 682.667">
            <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path d="M0 512h512V0H0Z" data-original="#000000" />
              </clipPath>
            </defs>
            <g fill="none" stroke="#007bff"  transform="matrix(1.33 0 0 -1.33 0 682.667)">
              <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
              <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
            </g>
          </svg>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">Security</h3>
          <p className="text-gray-500 text-sm leading-relaxed">Your data is protected by the latest security measures.</p>
        </div>
      </div> */}

      {/* <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <div className="p-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" className="w-8 mb-6" viewBox="0 0 24 24">
            <g >
              <path d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
              <path d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
              <path d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
            </g>
          </svg>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">Performance</h3>
          <p className="text-gray-500 text-sm leading-relaxed">Experience blazing-fast performance with our product.</p>
        </div>
      </div> */}
    </div>
  </div>
</div>
{/*  */}

        </div>
    );
};

export default MySkills;
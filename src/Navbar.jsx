import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  return (
    <div>
      <div 
      
      className="navbar z-30 fixed top-0 w-full  backdrop-blur-lg border border-white/30 text-white"
       >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-primary-gradient rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#educations">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl ml-10 md:ml-0">
            <img
              src="https://i.ibb.co/ckDV1R5/Nazmul-origin-preview.png"
              alt="logo"
              className="w-20 "
            />
          </a>
        </div>
        <Fade cascade>
          <div className="navbar-center hidden lg:flex">
            <ul className=" poppins-extralight menu menu-horizontal px-1 font-semibold text-gradient-to-r from-[#8750f7] to-[#a91079]">
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#educations">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            

          </div>
        </Fade>

        <div className="navbar-end">
          <div className="font-[sans-serif] space-x-4 space-y-4 text-center">
           
<button className="relative px-5 font-semibold py-2.5 rounded-lg text-white text-sm tracking-wider bg-gradient-to-tl from-[#2A1454] to-[#9479c3] hover:from-[#3B1A78] hover:to-[#B090D7] transition-all duration-500 ease-in-out hover:pr-12 cursor-pointer">
  <span className="relative inline-block transition-all duration-500 after:content-['»'] after:absolute after:opacity-0 after:right-[-30px] after:transition-all after:duration-500 hover:after:opacity-100 hover:after:right-15 poppins-extralight"><a href="#contact">Hire Me</a></span>
</button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

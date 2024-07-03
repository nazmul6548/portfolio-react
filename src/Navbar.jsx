

const Navbar = () => {
    return (
        <div>
            <div className="navbar z-30 bg-primary-gradient  text-white fixed opacity-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-primary-gradient rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Skills</a></li>
        <li><a>Projects</a></li>
        <li><a>Education</a></li>
        <li><a>Contract</a></li>
        <li><a>Contract</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Skills</a></li>
      <li><a>Projects</a></li>
      <li><a>Education</a></li>
      <li><a>Contract</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    
    <div className="font-[sans-serif] space-x-4 space-y-4 text-center">
    <button type="button"
        className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium outline-none bg-gradient-to-tr hover:bg-gradient-to-tl from-[#2A1454] to-[#c2b1e0]">Hire Me</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;
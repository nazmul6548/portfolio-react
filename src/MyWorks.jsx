

const MyWorks = () => {
    return (
        <div id="projects" className="bg-primary-gradient font-sans  pt-20">
  <div className="max-w-7xl mx-auto">
    <div className="text-center relative">
      <h2 className="text-4xl bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text font-extrabold text-[#333] inline-block relative after:absolute after:w-6/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-[#a91079] after:rounded-full">My Recent Works</h2>
    </div>
    {/* <div className="text-center relative">
  <h2 className="text-4xl bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text font-extrabold text-[#333]  relative after:content-[''] after:absolute after:w-6/6 after:h-1 after:left-0 after:right-0 after:bottom-[-10px] after:mx-auto after:bg-pink-400 after:rounded-full">
    My Recent Works
  </h2>
</div> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
    <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img src="https://i.ibb.co/rcbqW9F/Vite-React-9.png" alt="Blog Post 1" className="w-full h-60 object-cover " />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">01 JUN 2024 | 10 JUN 2024</span>
          <h3 className="text-xl font-bold text-[#333]">HOMEZEN</h3>
          <hr className="my-3" />
          <p className="text-gray-400 text-sm">About Our real estate platform features three roles: agent, admin, and guest. Agents can post properties and handle payments through Stripe</p>
          <div>
          <hr className="my-3" />
            <h1 className="font-bold">Features :</h1>
            <li className="text-gray-400 text-sm">Three Distinct Roles: HomeZen offers separate dashboards and functionalities for Admin, Agent, and User (Guest) roles.</li>
            <li className="text-gray-400 text-sm">Admin Management: Admins can add and manage users, guests, and agents, ensuring a streamlined workflow.</li>
            <li className="text-gray-400 text-sm">Property Approval: Agents can add properties, which require admin approval before being listed on the home page.</li>
          </div>
          <hr className="my-3" />
          <div>
            <h1 className="font-bold">Technologys :</h1>
            <p className="text-gray-400 text-sm">Stripe,Tanstack Query,MongoDB,React.js,JWT,Axios</p>
          </div>
          <hr className="my-3" />
          <h1 className="font-bold ">Github & Project Link :</h1>
          <div className="flex justify-between">
            
            <button className="bg-[#a91079] mt-4 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded m-1 ">
  <a href="https://github.com/nazmul6548/homezen-" target="_blank" className="text-white no-underline">Client Side</a>
</button>
<button className="bg-[#a91079] mt-4 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded m-1 ">
  <a href="https://github.com/nazmul6548/homezen-server-side" target="_blank" className="text-white no-underline">Server Side</a>
</button>
<button className="bg-[#a91079] mt-4 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded m-1 ">
  <a href="https://real-estate-platform-b620c.web.app" target="_blank" className="text-white no-underline">Live Link</a>
</button>
          </div>
        </div>
      </div>
     
      <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img src="https://i.ibb.co/ZSP4P3y/JobHub-n.png" alt="Blog Post 1" className="w-full h-60 object-cover" />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">15 APR 2024 | 23 APR 2024</span>
          <h3 className="text-xl font-bold text-[#333]">JOBHUB</h3>
          <hr className="my-3" />
          <p className="text-gray-400 text-sm">JobHub is a platform where users can post, search for, apply to, update, and delete job listings.</p>
          <div>
          <hr className="my-3" />
            <h1 className="font-bold">Features :</h1>
            <li className="text-gray-400 text-sm">React Tabs: Employing React Tabs, JobHub organizes content efficiently, allowing users to navigate between different sections seamlessly.</li>
            <li className="text-gray-400 text-sm">Applied Job Management: Job seekers can efficiently manage their applications, including updates and deletions, simplifying the job application process.</li>
            <li className="text-gray-400 text-sm">Additional Enhancements: Implementation of various npm packages, including name list toast, framer motion, etc., enhances user experience and adds visual appeal to the platform.</li>
          </div>
          <hr className="my-3" />
          <div>
            <h1 className="font-bold">Technologys :</h1>
            <p className="text-gray-400 text-sm">React to pdf,Tanstack Query,MongoDB,React-tabs,React.js</p>
          </div>
          <hr className="my-3" />
          <h1 className="font-bold ">Github & Project Link :</h1>
          <div className="flex justify-between">
            
            <button className="bg-[#a91079] mt-4 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded m-1 ">
  <a href="https://github.com/nazmul6548/jobhub-client-side" target="_blank" className="text-white no-underline">Client Side</a>
</button>
<button className="bg-[#a91079] mt-4 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded m-1 ">
  <a href="https://github.com/nazmul6548/jobhub-server-side" target="_blank" className="text-white no-underline">Server Side</a>
</button>
<button className="bg-[#a91079] mt-4 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded m-1 ">
  <a href="https://jobquesthub-60260.web.app/" target="_blank" className="text-white no-underline">Live Link</a>
</button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img src="https://i.ibb.co/71sFW46/Home-craft-2.png" alt="Blog Post 1" className="w-full h-60 object-cover" />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">01 ApR 2024 | 6 APR 2024</span>
          <h3 className="text-xl font-bold text-[#333]">Creative Craft</h3>
          <hr className="my-3" />
          <p className="text-gray-400 text-sm">Welcome to Creative Craft, where you can share your handmade creations with a community of fellow crafters! Join us and showcase your unique projects today.</p>
          <div>
          <hr className="my-3" />
            <h1 className="font-bold">Features :</h1>
            <li className="text-gray-400 text-sm">Enjoy hassle-free access through Google and GitHub authentication options.</li>
            <li className="text-gray-400 text-sm">Navigate seamlessly with our intuitive navbar featuring login and registration forms</li>
            <li className="text-gray-400 text-sm">Login/register buttons conditionally displayed based on user authentication status.</li>
            <li className="text-gray-400 text-sm">Immerse yourself in captivating visuals with our slider carousel feature.</li>
            <li className="text-gray-400 text-sm">Engaging Visuals with Slider Carousel.</li>
          </div>
          <hr className="my-3" />
          <div>
            <h1 className="font-bold">Technologys :</h1>
            <p className="text-gray-400 text-sm">Stripe,Tanstack Query,MongoDB,React.js,JWT,Axios</p>
          </div>
          <hr className="my-3" />
          <h1 className="font-bold ">Github & Project Link :</h1>
          <div className="flex justify-between">
            
            <button className="bg-[#a91079] mt-4 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded m-1 ">
  <a href="https://github.com/nazmul6548/creative-craft-client-side" target="_blank" className="text-white no-underline">Client Side</a>
</button>
<button className="bg-[#a91079] mt-4 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded m-1 ">
  <a href="https://github.com/nazmul6548/creative-craft-server-side-" target="_blank" className="text-white no-underline">Server Side</a>
</button>
<button className="bg-[#a91079] mt-4 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded m-1 ">
  <a href="https://assignment-10-art.web.app/" target="_blank" className="text-white no-underline">Live Link</a>
</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default MyWorks;
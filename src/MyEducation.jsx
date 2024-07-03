

const MyEducation = () => {
    return (
        <div>
             <div className="bg-primary-gradient pt-20 px-4 pb-20 font-sans-serif text-[#333]">
             <div className="text-center relative">
  <h2 className="text-4xl bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text font-extrabold text-[#333] inline-block relative after:content-[''] after:absolute after:w-6/6 after:h-1 after:left-0 after:right-0 after:bottom-[-10px] after:mx-auto after:bg-[#a91079] after:rounded-full">
    My Education
  </h2>
</div>
      {/* <h2 className="text-4xl bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text font-extrabold text-[#333] inline-block relative after:absolute after:w-6/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full text-center">My Recent Works</h2> */}
      <div className="grid sm:grid-cols-2 pt-12 gap-6 max-w-6xl mx-auto">
        <div className="bg-[#1e1034] hover:bg-primary-gradient  text-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
          {/* <h3 className="text-5xl font-extrabold">5.4<span className="text-blue-600">M+</span></h3> */}
          <div>
          <p className="text-[#9b6ef8] text-xl font-bold">2021</p>
            <h1 className="font-bold text-3xl">Masters(admitted)</h1>
            <p className="text-sm  mt-2">National University</p>
          </div>
        </div>
        <div className="bg-[#1e1034] hover:bg-primary-gradient text-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
          {/* <h3 className="text-5xl font-extrabold">$80<span className="text-blue-600">K</span></h3> */}
          <div>
          <p className="text-[#9b6ef8] text-xl font-bold">2017-2021</p>
            <h1 className="font-bold text-3xl">Hon's Complete(BSS)</h1>
            <p className="text-sm  mt-2">National University</p>
          </div>
        </div>
        <div className="bg-[#1e1034] hover:bg-primary-gradient text-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
          {/* <h3 className="text-5xl font-extrabold">100<span className="text-blue-600">K</span></h3> */}
          <div>
          <p className="text-[#9b6ef8] text-xl font-bold">2015-2017</p>
            <h1 className="font-bold text-3xl">HSC(Science)</h1>
            <p className="text-sm  mt-2">Ahsanullah College</p>
          </div>
        </div>
        <div className="bg-[#1e1034] hover:bg-primary-gradient text-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
          {/* <h3 className="text-5xl font-extrabold">99.9<span className="text-blue-600">%</span></h3> */}
          <div>
          <p className="text-[#9b6ef8] text-xl font-bold ">2013-2015</p>
            <h1 className="font-bold text-3xl">SSC(Science)</h1>
            <p className="text-sm  mt-2">Bishwa Darbar High School</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MyEducation;
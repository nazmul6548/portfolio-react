import { Fade } from "react-awesome-reveal";


const MyEducation = () => {
    return (
      <div id="educations">
      <div className="bg-primary-gradient pt-20 px-4 pb-20 font-sans-serif text-[#333]">
      <div className="text-center relative">

<h2 className="text-4xl bg-gradient-to-r from-[#8750f7] to-[#a91079] text-transparent bg-clip-text font-extrabold text-[#333] inline-block relative">
My Education
<span className="absolute left-0 right-0 bottom-[-10px] h-1 bg-gradient-to-r from-[#8750f7] to-[#a91079] rounded-full md:animate-slideUnderline"></span>
</h2>
<p className="text-xs md:text-sm text-white pt-6 md:pt-10 text-justify md:text-center   mr-4 ml-4 md:w-3/5 md:m-auto">I am currently advancing my studies with a Master’s degree, following the completion of my Bachelor’s in Social Sciences. My educational background includes a strong foundation in Science from my earlier academic years, which has fostered my analytical and problem-solving abilities.</p>
          {/* </div> */}
</div>
<Fade cascade >
{/* <h2 className="text-4xl bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text font-extrabold text-[#333] inline-block relative after:absolute after:w-6/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full text-center">My Recent Works</h2> */}
<div className="grid sm:grid-cols-2 pt-12 gap-6 max-w-6xl mx-auto">
  <div className="bg-[#1e1034] hover:bg-primary-gradient text-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)] transition-all duration-500 ease-in-out">
    <div>
      <p className="text-[#9b6ef8] text-xl font-bold">2021</p>
      <h1 className="font-bold text-3xl">Masters(admitted)</h1>
      <p className="text-sm mt-2">National University</p>
    </div>
  </div>
  <div className="bg-[#1e1034] hover:bg-primary-gradient text-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)] transition-all duration-500 ease-in-out">
    <div>
      <p className="text-[#9b6ef8] text-xl font-bold">2017-2021</p>
      <h1 className="font-bold text-3xl">Hon's Complete(BSS)</h1>
      <p className="text-sm mt-2">National University</p>
    </div>
  </div>
  <div className="bg-[#1e1034] hover:bg-primary-gradient text-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)] transition-all duration-500 ease-in-out">
    <div>
      <p className="text-[#9b6ef8] text-xl font-bold">2015-2017</p>
      <h1 className="font-bold text-3xl">HSC(Science)</h1>
      <p className="text-sm mt-2">Ahsanullah College</p>
    </div>
  </div>
  <div className="bg-[#1e1034] hover:bg-primary-gradient text-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)] transition-all duration-500 ease-in-out">
    <div>
      <p className="text-[#9b6ef8] text-xl font-bold">2013-2015</p>
      <h1 className="font-bold text-3xl">SSC(Science)</h1>
      <p className="text-sm mt-2">Bishwa Darbar High School</p>
    </div>
  </div>
</div>
</Fade>
</div>
 </div>



    );
};

export default MyEducation;
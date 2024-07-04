import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
// import emailjs from '@emailjs';
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';
import { useRef } from "react";
const Contract = () => {
    const form = useRef();
   
const handleSubmit =(e) =>{
    e.preventDefault();
    emailjs
    .sendForm('service_q929zia', 'template_a07tj9e', form.current, {
      publicKey: 'aPf5bQWA4Ic9AEONu',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
   
    
    e.target.reset()
}
    
    return (
        <div id="contact" className='bg-[#2e0249]'>
            <div className="pt-6 max-w-7xl max-lg:max-w-3xl mx-auto  ">
    <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
        <div>
            <h1 className="text-4xl font-bold text-white">Contact With Me</h1>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">I am a front-end web developer. You can contact me for hiring and other inquiries. My contact information is provided below.</p>

            <ul className="mt-12 space-y-8">
                <li className="flex items-center">
                <p className="text-white"><MdMarkEmailRead /></p><a  className="text-white text-sm ml-4">
                    nazmul.islam.juwel9@gmail.com
                    </a>
                </li>
                <li className="flex items-center">
                <p className="text-white"><FaMobileScreen /></p><a  className="text-white text-sm ml-4">
                    +880-1859336548
                    </a>
                </li>
                <li className="flex items-center">
                <p className="text-white"><FaLocationArrow /></p><a  className="text-white text-sm ml-4">
                    Chattagram,Bangladesh
                    </a>
                </li>
            </ul>

            <ul className="flex mt-12 space-x-4">
                <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://github.com/nazmul6548" target="_blank">
                        {/* Social Icon */}
                        <p className="text-3xl text-black"><FaGithub /></p>
                    </a>
                </li>
                <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://www.linkedin.com/in/md-nazmul-juwel-juwel/"  target="_blank">
                        {/* Social Icon */}
                        <p className="text-3xl text-black"><FaLinkedin /></p>
                    </a>
                </li>
                <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://web.facebook.com/nazmul6548/" target="_blank">
                        {/* Social Icon */}
                        <p className="text-3xl text-black"><FaFacebook /></p>
                    </a>
                </li>
            </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-sm font-semibold text-gray-800">I'm interested in...</p>

            <div className="space-y-4 max-lg:mt-4">
                <button type="button" className="px-4 py-2 mt-3 rounded-lg bg-[#a91079] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#a91079] mr-4">Web development</button>
                
                
            </div>

            <form ref={form} onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input type="text"
                                  
                                name="name" placeholder="Name" className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
              <input type="email" name="email"
               
              placeholder="Email" className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
              <input type="text" name="subject"
         
              placeholder="Subject" className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
              <textarea placeholder="Message" name="message"
              
              rows="6" className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#a91079]"></textarea>
              <button type="submit" className="text-white bg-[#a91079] hover:bg-[#a91079e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full mt-6">
                Send Message
              </button>
            </form>
        </div>
    </div>
</div>
        </div>
    );
};

export default Contract;
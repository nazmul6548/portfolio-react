import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
// import emailjs from '@emailjs';
import emailjs from '@emailjs/browser';
// import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import { useInView,motion } from "framer-motion";
const Contract = () => {
    const form = useRef();
   
const sendEmail =(e) =>{
   

    e.preventDefault();
    emailjs
    .sendForm('service_8movq0m', 'template_a07tj9e', form.current, {
      publicKey: 'MKXpqKZYsylYqPrM3',
    })
    .then(
      () => {
        console.log('SUCCESS!');

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "successfully send mail"
          });
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
   
    
    e.target.reset()
}
const ref = useRef(null);
const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

const paragraphVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
    
    return (
            <Fade cascade>
        <div id="contact" className='bg-[#2e0249]'>
            <div className="pt-6 max-w-7xl max-lg:max-w-3xl mx-auto  ">
    <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
        <div>
        <div className="w-[160px] h-[160px] ">
  <img
    src="https://i.ibb.co/b2vgf5J/Animation-1725604899796.gif"
    alt=""
    className="w-full h-full"
  />
</div>
            <h1 className="merriweather-regular text-3xl md:text-4xl font-bold text-white">Contact With Me</h1>
            <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
            <p className="text-sm text-gray-300 mt-4 leading-relaxed poppins-extralight">I am a front-end web developer. You can contact me for hiring and other inquiries. My contact information is provided below.</p>
          </motion.div>

            <ul className="mt-12 space-y-8">
                <li className="flex items-center">
                <p className="text-white"><MdMarkEmailRead /></p><a  className="poppins-extralight text-white text-sm ml-4">
                    nazmul.islam.juwel9@gmail.com
                    </a>
                </li>
                <li className="flex items-center">
                <p className="text-white"><FaMobileScreen /></p><a  className="poppins-extralight text-white text-sm ml-4">
                    +880-1859336548
                    </a>
                </li>
                <li className="flex items-center">
                <p className="text-white"><FaLocationArrow /></p><a  className="poppins-extralight text-white text-sm ml-4">
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
            <p className="text-sm font-semibold text-gray-800 poppins-extralight">I'm interested in...</p>

            <div className="space-y-4 max-lg:mt-4">
                <button type="button" className="px-4 py-2 mt-3 rounded-lg bg-[#a91079] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#a91079] mr-4 poppins-extralight">Web development</button>
                
                
            </div>

            <form ref={form} onSubmit={sendEmail} className="poppins-extralight mt-8 space-y-4">
              <input type="text"
                                  
                                name="name" required placeholder="Name" className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
              <input type="email" name="email"
               
              placeholder="Email" required className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
              <input type="text" name="subject"
         
              placeholder="Subject" required className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
              <textarea placeholder="Message" name="message"
              
              rows="6" className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#a91079]"></textarea>
              <button type="submit" className="poppins-extralight text-white bg-[#a91079] hover:bg-[#a91079e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full mt-6">
                Send Email
              </button>
            </form>
        </div>
    </div>
</div>
        </div>
</Fade>
    );
};

export default Contract;
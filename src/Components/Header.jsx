import React, {useEffect} from "react";
// import Typed from 'react-typed';   // Import Typed Library using for Text Typing animation
import "animate.css";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";

// Import Icon
import { FaHackerrank, FaYoutube, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail  } from "react-icons/si";
import ig from "../assets/rahul-img2.jpg";
import banner from "../assets/banner.jpg";
import "./nav.css";

// Header Animation
// import Mern_Developer from "../assets/animation/Mern_Developer.json";
// import Lottie from "lottie-react";

const Header = () =>{

    useEffect(()=>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in',
            once:true,
            delay: 100});
    },[])


    return(
        <>
        <section id="home">
        {/* Main Header Section */}
        <div className="w-full relative ">

            <img src={banner} alt="error" className="mx-auto absolute w-full h-full bg-center bg-cover"/>
        
        {/* Opacity section on main Header */}
        <div className="bg-black absolute w-full h-full opacity-80"></div>
             
            {/* Info and Image main Section*/}
            <div className="w-full flex flex-col lg:flex-row gap-y-8 lg:gap-x-5 items-center 
                 justify-between py-16 pt-28 sm:pt-32 overflow-hidden">
                
                {/* Information */}
                <div className="basis-1/2 px-5 md:px-20 space-y-1 md:space-y-4" data-aos="fade-right">

                    <h2 className="font-bold text-[#fc036f] text-[22px] md:text-4xl font">Hello, It's me</h2>

                    <h1 className="text-white font-bold font text-[35px] md:text-6xl ">Rahul Singh Kushwah</h1>

                    <h2 className="text-4xl text-white font text-[24px] md:text-4xl">& I'm a <span>

                    {/* <Typed
                        className="text-cyan-500 font"
                        strings={[' React Developer', ' Frontend Developer', ' MERN Developer', ' Full-Stack Developer']}
                        typeSpeed={80}
                        backSpeed={60}
                        loop
                    /> */}
                    </span></h2>

                    <p className="text-white text-[13px] sm:text-sm leading-normal ">I'm creative web developer based on Uttar Pradesh, 
                    and I'm very passionate and dedicate to my work.</p>
                    


                    <div className="flex flex-row space-x-3 lg:space-x-5 pt-3">

                        <div className="bg-transparent rounded-full p-4 border border-sky-500 items-center shadow-lg shadow-cyan-500/50">
                            <a href = "https://www.linkedin.com/in/rahul-singh-kushwah-6a664b172">
                                <FaLinkedinIn size="20" className="text-cyan-500 "/>
                            </a>
                        </div>

                        <div className="bg-transparent rounded-full p-4 border border-sky-500 shadow-lg shadow-cyan-500/50">
                           <a href = "https://github.com/Rahul1905-sk"><FaGithub size="20" className="text-cyan-500"/></a>
                        </div>

                        {/* <div className="bg-transparent rounded-full p-4 border border-sky-500 shadow-lg shadow-cyan-500/50">
                        <a href = "https://www.hackerrank.com/aditya_singh_20"><FaHackerrank size="20" className="text-cyan-500"/></a>
                        </div> */}

                        {/* <div className="bg-transparent rounded-full p-4 border border-sky-500 shadow-lg shadow-cyan-500/50">
                        <a href = "https://www.youtube.com/c/CodingHubTech"><FaYoutube size="20" className="text-cyan-500"/></a>
                        </div> */}

                        <div className="bg-transparent rounded-full p-4 border border-sky-500 shadow-lg shadow-cyan-500/50">
                        <a href = "mailto:rahul1905.sk@gmail.com"><SiGmail size="20" className="text-cyan-500"/></a>
                        </div>
                    
                    </div>
                </div>


                
                {/* Images */}
                <div className="basis-1/2 px-8 lg:py-5 overflow-hidden" data-aos="fade-left">
                    <div>
                       <img src={ig} alt="" className="lg:w-[70%] lg:h-[70%] bg-center bg-cover background mx-auto shadow-lg header_img"/>
                    </div> 
                     {/* <div className="developerLogo" style={{ width: 450 }}>
          <Lottie animationData={Mern_Developer} />
        </div> */}
                </div>


            </div>
        </div>
        </section>
    
        </>
    )
}
export default Header;
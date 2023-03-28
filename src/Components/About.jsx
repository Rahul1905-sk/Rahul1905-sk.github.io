import React from "react";
import Typed from "react-typed";
import { FiAward } from "react-icons/fi";
import { BiBriefcase, BiDesktop } from "react-icons/bi";

import about from "../assets/b7.jpg";
import rahul from "../assets/rahul-img.png";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";

import { RiDownloadCloudFill } from "react-icons/ri";

const About = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in",
      once: true,
      delay: 100,
    });
  }, []);

  return (
    <>
      <section id="about" className="">
        <div className="w-full relative">
          <img
            src={about}
            alt="error"
            className="mx-auto absolute w-full h-full bg-center bg-cover"
          />

          {/* Background Image above Opacity */}
          <div className="bg-black absolute w-full h-full opacity-80"></div>

          {/* Image Above about-me section */}
          <div className="w-full mx-auto relative py-16 md:py-20 px-2 ">
            {/* About me design */}
            <div className="max-w-[300px] mx-auto p-5 text-center">
              <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-white font-serif">
                About me
              </h1>

              <div className="w-[200px] mx-auto flex flex-row gap-x-3 items-center">
                <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
                <h1 className="text-[#fc036f] font-semibold">Who I am</h1>
                <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
              </div>
            </div>
            {/* End About-me design */}

            {/* About-me information section(Image and Info) */}
            <div className="w-full py-3 md:py-7">
              {/* About-me flex part section*/}
              <div
                className="max-w-[1250px] flex flex-col lg:flex-row gap-y-3 md:gap-x-11 mx-auto py-3 items-center 
                        rounded-lg shadow-lg bg-white "
              >
                {/* flex-1 (Images) */}
                <div
                  className="basis-1/2 items-center mx-auto px-3"
                  data-aos="fade-up"
                >
                  <img
                    src={rahul}
                    alt="Error!"
                    className="bg-center bg-cover rounded-lg"
                  />
                </div>

                {/* flex-2 (info) */}
                <div
                  className="basis-1/2 text-justify text-gray-800 overflow-hidden px-5 space-y-3"
                  data-aos="fade-up"
                >
                  {/* Experience, Completed & Learning Design Section */}
                  <div
                    className="flex flex-row space-x-3 items-center justify-center"
                    data-aos="zoom-out-up"
                  >
                    <div className="flex flex-col items-center space-y-0 text-center py-3 px-4 sm:py-4 sm:px-8 border rounded-lg">
                      <h1>
                        <FiAward size={20} color="#fc036f" />
                      </h1>
                      <h1 className="text-gray-800 font-semibold text-[13px]">
                        Experience
                      </h1>
                      <h2 className="text-gray-500 text-[11px]">Fresher</h2>
                    </div>

                    <div className="flex flex-col items-center space-y-0 text-center py-3 px-4 sm:py-4 sm:px-8 border rounded-lg">
                      <h1>
                        <BiBriefcase size={22} color="#fc036f" />
                      </h1>
                      <h1 className="text-gray-800 font-semibold text-[13px]">
                        Completed
                      </h1>
                      <h2 className="text-gray-500 text-[11px]">3 Project's</h2>
                    </div>

                    <div className="flex flex-col items-center space-y-0 text-center py-3 px-4 sm:py-4 sm:px-6 border rounded-lg">
                      <h1>
                        <BiDesktop size={22} color="#fc036f" />
                      </h1>
                      <h1 className="text-gray-800 font-semibold text-[13px]">
                        Learning
                      </h1>
                      <h2 className="text-gray-500 text-[11px]">
                        New Technology
                      </h2>
                    </div>
                  </div>
                  {/* End of Experience, Completed & Learning Design Section */}

                  <h1 className="flex flex-col sm:flex-row font-bold text-[25px] md:text-2xl tab:text-[33px] text-gray-800 text-left font antialiased">
                    Hey, I'm Rahul and I'm a
                    <h1>
                      <Typed
                        className="text-cyan-500 text-[25px] md:text-2xl tab:text-[33px] font antialiased font-bold"
                        strings={[
                          " React Developer",
                          " Frontend Developer",
                          " MERN Developer",
                          " Full-Stack Developer",
                        ]}
                        typeSpeed={90}
                        backSpeed={60}
                        loop
                      />
                    </h1>
                  </h1>
                  <p className="mt-3 md:text-[15px] leading-6 sm:pr-5 first-letter:text-3xl first-letter:font-semibold">
                    Hello, my name is Rahul Singh Kushwah. I live in Gwalior,
                    (M.P.). I build things for the WEB. I enjoy creating things
                    that live on the internet. I have completed my graduations
                    in Bachelor of Mechanical Engineering (BCA) from Integral
                    University Lucknow. But as we know degree in not sufficient,
                    so i joined an Masai School for learning web development.
                    Today, I am a qualified and professional web developer with
                    great knowledge of MERN stack, & some frameworks like React,
                    Next, Express. But still exploring other technologies and
                    frameworks that catch my interest! If you're looking for a
                    web developer to add to your team, I'd love to hear from
                    you! I have a good experience in HTML5 & CSS3, JavaScript &
                    TypeScript, React & Next.js, Express & MongoDB. I have
                    created so many fully functional, bugs free websites with
                    attractive designs. I like to do my work deeply & sincerely.
                    I would love to answers all the queries if you have any,
                    without any hesitation.
                  </p>

                  <a download="Resume_AdityaSingh.pdf" href="Resume.pdf">
                    <button
                      className="w-[150px] rounded-md flex flex-row items-center gap-1 
                font-medium my-5 py-3 text-white px-1 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[17px]"
                    >
                      <RiDownloadCloudFill className="ml-2" />
                      Download CV
                    </button>
                  </a>
                </div>
                {/* End flex-2 (info) */}
              </div>
              {/* End About-me flex part section*/}
            </div>
            {/* End About-me information section(Image and Info) */}
          </div>
          {/* End Image Above about-me section */}
        </div>
      </section>
    </>
  );
};
export default About;

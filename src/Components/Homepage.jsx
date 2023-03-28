import React from "react";
import "../styles/Homepage.css";

import Mern_Developer from "../Animation/Mern_Developer.json";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";

import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import Button from "./Button";

// import Mygif from '../Animation/gif/UI Developer.gif'


const Homepage = () => {
  return (
    <div className="container">
      <div className="left-container">
        <div>
          <h3 className="hello">Hi👋, I'm Rahul Singh Kushwah</h3>
          <div>
            <h3 className="type-wrapper">
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "MERN STACK DEVELOPER",
                    "FULL STACK WEB DEVELOPER",
                    "REACT DEVELOPER",
                    "FRONTEND DEVELOPER",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </h3>
          </div>
        </div>
        <p>
          Passionate Full Stack Web Developer with a specialization in MERN
          Stack. Skilled, collaborative and attentive developer with a drive to
          develop the most relevant products. Always looking forward to learning
          something new to strengthen skills learned.
        </p>
        

        <div  className="social-icons">
          <a href="https://github.com/Rahul1905-sk">
            <div >
              <SiGithub fontSize={'16px'} />
            </div>
            
          </a>
          <a href="https://www.linkedin.com/in/rahul-singh-kushwah-6a664b172">
            <div>
              <SiLinkedin />
            </div>
          </a>
          <a href="mailto:rahul1905.sk@gmail.com">
            <div>
              <SiGmail />
            </div>
          </a>
          

           
        </div>
        <Button children={'Download Resume'} />
       
      </div>

      <div className="right-container">
        <div className="developerLogo" style={{ width: 450 }}>
          <Lottie animationData={Mern_Developer} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

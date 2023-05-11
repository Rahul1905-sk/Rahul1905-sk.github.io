import React from "react";
import geek from "../assests/pirate.png";
import lens from "../assests/lenskart.png";
import cal from "../assests/cal.png";
import { SiNetlify } from "react-icons/si";
import gojo from "../assests/gojo.png";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="main-text">
          <h2>
            <span>Latest </span>Projects
          </h2>
        </div>

        <div className="nav-link projects" id="nav-link-projects">
          <div className="project-card">
            <img src={lens} alt="" />
            <div className="layer">
              <h5 className="project-title">pepperFry.Com</h5>
              <p className="project-description">
              Pepperfry is an Indian online marketplace for furniture and home décor. The company is headquartered in Mumbai, Maharashtra.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : REACT, JS, HTML, CSS, Chakra
              </p>
              <div className="project-deployed-link">
                <a href="gilded-alfajores-04941f.netlify.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Souravlahiri2507/cloudy-thing-7898"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={geek} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
              Booking.com, headquartered in Amsterdam, is one of the largest online travel agencies. It is a subsidiary of Booking Holdings. In 2022, the company's mobile app was the most downloaded mobile app in the travel agency category.
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML , CSS, JS</p>
              <div className="project-deployed-link">
                <a
                  href="https://effulgent-syrniki-67b038.netlify.app/index.html"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Shahid77137/abundant-coat-8487"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={cal} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
              Masai Calculator ( A fully functional Calculator )
              </p>
              <p className="project-tech-stack">Tech-Stack</p>
              <div className="project-deployed-link">
                <a
                  href="delicate-tulumba-9050c3.netlify.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Souravlahiri2507/cold-throat-6863"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={gojo} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
              What is RentoMojo? We're an online rental company and we're here to offer you easy access to a smarter & better lifestyle. Our services let you rent lifestyle essentials like furniture, appliances and more at affordable prices.
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS</p>
              <div class="project-deployed-link">
                <a
                  href="lively-kitsune-c2be93.netlify.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/hoshiyarjyani/deafening-weather-2115"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

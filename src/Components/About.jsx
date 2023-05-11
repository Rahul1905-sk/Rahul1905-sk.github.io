import React from "react";
import me from "../assests/photo.png.jpeg";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about-img">
          <img className="home-img" src={me} alt="home-image" />
        </div>
        <div className="nav-link about">
          <h1>
            About <span>Me</span>
          </h1>
          <h2 id="user-detail-name">
            I'm <span>Rahul Singh Kushwah</span> from Gwalior, Madhya Pradesh
          </h2>

          <h4><b>Mern Stack Developer</b></h4>
          <p id="user-detail-intro" style={{ letterSpacing: "1px" }}>
            Full-Stack developer with considerable technical skills who
            possesses self-discipline and can work with HTML, CSS, JavaScript,
            React-JS, Redux React, TypeScript, etc. Looking forward to joining a
            progressive organization with opportunities to work on significant
            projects.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;

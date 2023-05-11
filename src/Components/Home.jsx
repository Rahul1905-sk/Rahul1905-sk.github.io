import React from "react";
import CV from "../assests/cv.pdf";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="nav-link home">
          <div className="slide">
            <span className="one">Hey There!</span>
            <span className="two">I'm</span>
          </div>
          <h1 id="user-detail-name">Rahul Singh Kushwah</h1>
          <h3 id="user-detail-skill">
            Mern Stack <span>Developer.</span>
          </h3>

          <br />
          <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={CV}
              download="pdf"
              id="resume-link-2"
              target="_blank"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1tekatdNvXft3YA3wFTVy8ztUaTRJaD3d/view?usp=sharing"
                )
              }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;


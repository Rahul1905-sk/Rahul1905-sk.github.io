import React from "react";
import { Box, Button, Flex, Text, useMantineTheme } from "@mantine/core";
import Card from "./Card";
import MyTitle from "./MyTitle";

import { SlBadge } from "react-icons/sl";
import { BsDisplay } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi";
import { FcDownload } from "react-icons/fc";
import { handleResume } from "./HomePage";
import { useContext } from "react";
import {  } from "react-intersection-observer";
import { useInView } from 'react-intersection-observer';
import NavbarContextProvider, { useNavbarData } from "./NavbarContext";
import { useEffect } from "react";

 
const About = () => {
  const { colors } = useMantineTheme();
  const { primaryColor } = useMantineTheme();

 
  const { ref, inView, entry } = useInView({
    threshold: 0.5
  });

const [_,setLinkName] =  useNavbarData()

useEffect(() => {
 
  if(inView) {
    setLinkName('about')
  }

}, [inView])


  return (
    <Flex ref={ref}  className="about section" direction={"column"} id="about" p={"0 160px"} h={"100vh"}  >
      <MyTitle title={"About Me"} des={"Who I am"} />

      <Flex gap={"3.125rem"}   >
        <Flex sx={{ zIndex: 2 }}>
          <Box className="card">
            <div className="b"></div>
            <Box className="white-box imgCard" w="350px">
              <img className="home-img"
                style={{ width: "90%", zIndex: 50 }}
                src="../../RahulImage.jpeg"
              />
            </Box>
            {/* <div className='imgCard'> */}

            {/* </div> */}
            <div className="a"></div>
          </Box>
        </Flex>
        <Flex
          direction={"column"}
          align={"center"}
          p={"20px"}
          // gap={'20px'}
          sx={{ border: ".0625rem solid black", zIndex: 3 }}
        >
          <Flex gap={"3.125rem"}>
            <Card
              title={"1200+ hours"}
              des={"Coding Experience"}
              icon={<HiOutlineClock />}
            />
            <Card
              title={"700+ questions"}
              des={"Solved in DSA"}
              icon={<SlBadge />}
            />
            <Card
              title={"Learning"}
              des={"New Technology"}
              icon={<BsDisplay />}
            />
          </Flex>
          <Box mt={"2.5rem"} mb={'40px'}  fw={500} sx={{ textAlign: "justify" }}>
            An aspiring Full Stack Web Developer who build things for the web
            and enjoy creating things that live on the internet and has a strong
            command of HTML, CSS, and JavaScript, and is proficient in the MERN
            stack (MongoDB, Express.js, React.js, Node.js). A constant learner
            and has the ability to adapt to new technologies. Capable of working
            in teams by providing valuable support.
          </Box>

          <Button
            target="_blank"
            style={{ alignSelf: "center", boxSizing: "content-box" }}
            onClick={handleResume}
            class="nav-link resume"
            p={"8px 35px"}
            radius={"0.3rem"}
            fz={"20px"}
            id="resume-button-2" 
           
            leftIcon={<FcDownload style={{ marginRight: "5px" }} />}
          >
            Resume
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;

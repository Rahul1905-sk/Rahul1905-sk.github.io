import React from "react";
import { Anchor, Box, Button, Flex, Text, useMantineTheme } from "@mantine/core";
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
import resume from './download/Rahul_Kushwah_Resume.pdf'
 
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
          <Box  id="user-detail-intro"  className="user-detail-intro" mt={"2.5rem"} mb={'40px'}  fw={500} sx={{ textAlign: "justify" }}>
            An aspiring Full Stack Web Developer who build things for the web
            and enjoy creating things that live on the internet and has a strong
            command of HTML, CSS, and JavaScript, and is proficient in the MERN
            stack (MongoDB, Express.js, React.js, Node.js). A constant learner
            and has the ability to adapt to new technologies. Capable of working
            in teams by providing valuable support.
          </Box>
          {/* <Button
              id='resume-button-2'
              onClick={() =>
                openInNewTab(
                  'https://drive.google.com/file/d/1axYneHxeq0hrnoHqdb_KJNWoEMfTPdnO/view' */}
                  {/* // 'https://drive.google.com/file/d/1iRtaj8LV9l5y9-aiEVNRFC0KLz5Q-JMZ/view?usp=sharing' */}
                {/* )
              }
              colorScheme={'teal'}
            >
              <a href={resume} download id='resume-link-2'>
                <Flex>
                  <Text as='span'>Resume</Text>
                  <Text as='span' ml={'2'}> */}
                    {/* <AiOutlineDownload fontSize={'1.2rem'} /> */}
                  {/* </Text>
                </Flex>
              </a>
            </Button> */}
         
         <a
            href="/Rahul_Kushwah_Resume.pdf"
            download="Rahul_Kushwah_Resume.pdf"
            onClick={() => {
              window.open(
                // "https://drive.google.com/file/d/1-27JqVP743yK-A3ZE3CvIRpF32OzsQfL/view?usp=sharing"
                "https://drive.google.com/file/d/1axYneHxeq0hrnoHqdb_KJNWoEMfTPdnO/view"
              );
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              colorScheme={"transperent"}
              className="link"
              fontSize={"25px"}
              p="0"
              id="resume-button-2"
              value="download"
            > 
              Resume
            </Button>
          </a>

        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;

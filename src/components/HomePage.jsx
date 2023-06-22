import {
  ActionIcon,
  Box,
  Flex,
  Button,
  Group,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import {FcDownload } from "react-icons/fc";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import MyButton from "./BubbleButton";
import * as animationData from "../lottie.json"; 
import TypewriterComp from "./TypewriterEffect/Typewriter"; 
import { ParticlesOut } from "./ParticlesAnimation";
import { useEffect } from "react";
import { MdDownload } from "react-icons/md";
import { useNavbarData } from "./NavbarContext";
import { useInView } from "react-intersection-observer";

export const handleResume = () => {
  window.open('https://drive.google.com/file/d/1axYneHxeq0hrnoHqdb_KJNWoEMfTPdnO/view?usp=sharing')
 }
const HomePage = () => {
  const { colors } = useMantineTheme();
  const {primaryColor} = useMantineTheme()
const arr = [
  'Frontend Developer', 
  'MERN Developer', 
  'Full Stack Web Developer', 
  'React Developer', ]


  const { ref, inView, entry } = useInView({
    threshold: 0.5
  });

const [_,setLinkName] =  useNavbarData()

useEffect(() => {
 
  if(inView) {
    setLinkName('')
  }

}, [inView])




  return ( 
    <>
     
    <Flex
    ref={ref}
      direction={"row"}
      justify={"space-between"}
      align={"center"} 
      h={"90vh"}
      m={"auto"}
      p={"0 10rem"} 
      id="home"
      sx={{  overflowX:'hidden'}}
    >
      <Flex direction={"column"} sx={{flex:1}} >
        <Title order={1}> Hi, I'm </Title>
        <Title id="user-detail-name"  order={1} fz={'3rem'}> Rahul Singh Kushwah </Title>
        <Flex component={'h1'} order={2}>
          {" "}
          And I'm a &nbsp; <Text component="span">  <TypewriterComp arr={arr} /></Text>
        </Flex>
        <Text>
          {" "}
          A passionate full-stack web developer, who loves to buid cool projects and work in a team. I want to achieve global recognition and exposure with my skillset, toolset and mindset.
        </Text>
        <br />
        <Group spacing={'35px'} mb={'25px'} >
          <ActionIcon size={'lg'} component="a" id="contact-linkedin" target="_blank" href="https://www.linkedin.com/in/rahul-singh-kushwah-6a664b172">
            {" "}
            <SiLinkedin size={'40px'} color={colors.blue[5]} />{" "}
          </ActionIcon>
          <ActionIcon size={'lg'} id="contact-github" component="a" target="_blank" href="https://github.com/Rahul1905-sk">
            {" "}
            <SiGithub  size={'40px'} color={colors.dark[4]} />{" "}
          </ActionIcon>
          <ActionIcon size={'lg'} target="_blank" component="a" href="mailto:rahul1905.sk@gmail.com">
            {" "}
            <SiGmail  size={'40px'} color={colors.red[5]} />{" "}
          </ActionIcon>
        </Group >
        
        

{/* <a
            href="/Rahul_Kushwah_Resume.pdf"
            download="Rahul_Kushwah_Resume.pdf"
            // id="resume-link-2"
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
              
              className="link"
            fz={'18px'}
              p="5px 15px"
              id="resume-button-1"
              value="download"
              style={{boxSizing:'content-box'}}

              leftIcon={<MdDownload />}
            > 
              Resume
            </Button>
          </a> */}


        
      </Flex>
      <Flex direction={"column"} w={'45%'}>
        
        <Player
          autoplay
          loop
          src={"https://assets4.lottiefiles.com/packages/lf20_kyu7xb1v.json"} 
          style={{ height: "500px", width: "500px" }}
        >
          
        </Player>
      </Flex>
    
    </Flex>
    </>
  );
};

export default HomePage;

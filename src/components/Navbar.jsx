import React from 'react'
import {MdHome} from 'react-icons/md'
import {BiGitBranch} from 'react-icons/bi'
import {IoMdContact} from 'react-icons/io'
import {FaFilePdf} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import {BsGearFill} from 'react-icons/bs'
import { Anchor, Box, Button, Center, Flex, NavLink, Text, Title, useMantineTheme } from '@mantine/core'
import { useInView } from 'react-intersection-observer'
import { useNavbarData } from './NavbarContext'

 const arr = [
   {Icon : MdHome , to: '#' , size: 20 , name: '', pehchan: "nav-link home",  title: 'Home'},
   {Icon : IoMdContact , to: '#about' , size: 20 , name: 'about', pehchan: "nav-link about" ,  title: 'About Me'},
   {Icon : GiSkills , to: '#skills' , size: 16 , name: 'skills', pehchan:"nav-link skills" ,  title: 'Skills'},
   {Icon : BiGitBranch , to: '#projects' , size: 16 , name: 'projects', pehchan: "nav-link projects",  title: 'Projects'},
   {Icon : FaPhoneAlt , to: '#contact' , size: 16 , name: 'contact', pehchan:"nav-link contact" ,  title: 'Contact Me'},     
  ]
 

  function genStyle(active){
    return active ? {
      backgroundColor: '#1C7ED6',
      color: 'white',
      borderRadius: '0.3rem',
      textDecoration: 'none'
    } :{
      backgroundColor: 'white',
      color: 'black',
      
    }
     
  }


const Link = ({to,Icon,title,size=16,pehchan, active}) => {

    return <Anchor href={to} >   <NavLink label={title} className={`${pehchan}`} style={genStyle(active)}   icon={<Icon size={size} />} /> </Anchor>

}
 

const Navbar = () => {
const {primaryColor} = useMantineTheme()

const [linkName] =  useNavbarData()
 
// console.log(linkName);

  return (

    <Flex pos={'sticky'}  top={0} left={0} id="nav-menu"   h="5rem" justify={'space-around'} align={"center"} sx={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 25px 20px -20px", zIndex:100, backgroundColor:'white'}}>
        <Title style={{fontFamily: 'g'}} fz={'40px'}   > <Text ff={'cursive'}  component='span' color={primaryColor}> R</Text>SK </Title>
        <Flex id='nav-menu' w="50%" justify={"space-evenly"}  align={"center"} > 
   
       {arr.map((e)=> <Link key={e.title} {...e} active={linkName === e.name} />  )}
       
       {/* <Anchor   >   <NavLink label={'Resume'}  
      className="nav-link resume"
      style={{display:'none'}} /> </Anchor> */}
<a
            href="/Rahul_Kushwah_Resume.pdf"
            download="Rahul_Kushwah_Resume.pdf"
            id="resume-link-1"
            className="nav-link resume"
            // style={{display:'none'}}
            onClick={() => {
              window.open( 
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
              // id="resume-button-1"
              value="download"
              style={{boxSizing:'content-box'}}
              // leftIcon={<MdDownload />}
            > 
              Resume
            </Button>
          </a>

        </Flex>
       
    </Flex>
  )
}

export default Navbar
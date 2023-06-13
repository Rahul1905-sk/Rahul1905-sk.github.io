import React, { useState } from "react";
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
  Flex,
  useMantineTheme,
} from "@mantine/core";

import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

import { ContactIconsList } from "./ContactIcons";
import MyTitle from "./MyTitle";
import { useNavbarData } from "./NavbarContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useStyles = createStyles((theme) => ({
  

  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    // width:'80%',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    // maxWidth: rem(300),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  form: {
    width:'450px',
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },
  
  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const social = [
  {Icon:SiGmail, idName: 'contact-gmail', myLink:"mailto:rahul1905.sk@gmail.com"},
  {Icon:SiLinkedin, idName: 'contact-linkedin', myLink:"https://www.linkedin.com/in/rahul-singh-kushwah-6a664b172"},
  {Icon:SiGithub, idName: 'contact-github',  myLink:"https://github.com/Rahul1905-sk"},
   
    
];

const init = {
  name: '',
  message: ''
}

export function ContactPage() {
  const { classes } = useStyles();

  const [formData, setFormData] = useState(init)

  const handleClick = () => {

    if(formData.name == '' || formData.message == '') {
alert('Please fill details')

    } else {
      window.open(`mailto:rahul1905.sk@gmail.com?subject=${formData.name}&body=${formData.message}`,"_blank")

    }

  }


  const icons = social.map(({Icon,idName,myLink}, index) => (
    <ActionIcon
      key={index}
      size={28}
      id={idName}
      component="a"
      className={classes.social}
      variant="transparent"
      href={myLink}  
      target="_blank"
      >
      <Icon size="1.6rem" stroke={1.5}/>
    </ActionIcon>
  ));


  // <Group spacing={'35px'} mb={'25px'} >
  //         <ActionIcon size={'lg'} component="a" id="contact-linkedin" target="_blank" href="https://www.linkedin.com/in/rahul-singh-kushwah-6a664b172">
  //           {" "}
  //           <SiLinkedin size={'40px'} color="red"  />{" "}
  //         </ActionIcon>
  //         <ActionIcon size={'lg'} id="contact-github" component="a" target="_blank" href="https://github.com/Rahul1905-sk">
  //           {" "}
  //           <SiGithub  size={'40px'} color="red"   />{" "}
  //         </ActionIcon>
  //         <ActionIcon size={'lg'} target="_blank" component="a" href="mailto:rahul1905.sk@gmail.com">
  //           {" "}
  //           <SiGmail  size={'40px'} color="red"   />{" "}
  //         </ActionIcon>
  //       </Group >





  
  const { ref, inView, entry } = useInView({
    threshold: 0.5
  });

const [_,setLinkName] =  useNavbarData()

useEffect(() => {
 
  if(inView) {
    setLinkName('contact')
  }

}, [inView])



  return (
     <>
      <Flex ref={ref} direction={"column"} h={'100vh'}  > 
      <MyTitle title={"Contact"} des={"Get In Touch"} />
    <div id="contact" className={classes.wrapper} style={{minHeight:'65vh',padding: '5rem 10rem 3rem 10rem'}} >
      <SimpleGrid
        cols={2}
        spacing={50}
        
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div  >
          <Title className={classes.title}>Get in touch</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Building a successful product is a challenge. I am highly energetic
            in user experience design, interfaces and web development.
          </Text>

          <ContactIconsList variant="white"  />

          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form} style={{marginLeft:'auto'}}>
         
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            required
            value={formData.name}
            onChange={(e)=>setFormData({...formData,name:e.target.value})}
            classNames={{ input: classes.input, label: classes.inputLabel }}
            />
          <Textarea
            required
            label="Your message"
            placeholder="Your Message"
            minRows={4}
            value={formData.message}
            onChange={(e)=>setFormData({...formData,message:e.target.value})}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <Button onClick={handleClick} className={classes.control}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
      <footer   style={{textAlign:'center'}}>
      Designed and build with ❤️ by Rahul, 2023 All Right Reserved.
      </footer>

      </Flex>
            </>
  );
}

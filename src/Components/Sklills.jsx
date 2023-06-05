import { Box, Button, Flex, Grid, SimpleGrid } from "@mantine/core";
import React, { useState } from "react";
import MyTitle from "./MyTitle";
import { AllData } from "./Data";
import SkillCards from "./SkillCards";
import { useInView } from "react-intersection-observer";
import { useNavbarData } from "./NavbarContext";
import { useEffect } from "react";

const Sklills = () => {
  const [tabIndex, setTabIndex] = useState(0);


  
  const { ref, inView, entry } = useInView({
    threshold: 0.5
  });

const [_,setLinkName] =  useNavbarData()

useEffect(() => {
 
  if(inView) {
    setLinkName('skills')
  }

}, [inView])



  return (
    <Flex ref={ref} id="skills" direction={"column"} mih={"100vh"} >
      <MyTitle title={"Skills"} des={"What I Know"} />

      <Button.Group
        sx={{
          display: "flex",
          gap: "20px",
          placeContent: "center",
        }}
      >
        <Button
          onClick={() => setTabIndex(0)}
          sx={{
            filter: tabIndex === 0 ? "grayscale()" : "none",
          }}
          variant="gradient"
          fz={'16px'}
         
          gradient={{ from: "indigo", to: "cyan" }}
        >
          All
        </Button>
        <Button
          onClick={() => setTabIndex(1)}
          sx={{ filter: tabIndex === 1 ? "grayscale()" : "none" }}
          variant="gradient"
         fz={'16px'}
          gradient={{ from: "teal", to: "lime", deg: 105 }}
        >
          Frontend
        </Button>
        <Button
          onClick={() => setTabIndex(2)}
          sx={{ filter: tabIndex === 2 ? "grayscale()" : "none" }}
          variant="gradient"
         fz={'16px'}
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          Backend
        </Button>
        <Button
          onClick={() => setTabIndex(3)}
          sx={{ filter: tabIndex === 3 ? "grayscale()" : "none" }}
          variant="gradient"
         fz={'16px'}
          gradient={{ from: "orange", to: "red" }}
        >
          Tools
        </Button>
      </Button.Group>
      <SimpleGrid cols={4} w={"80%"} m={"auto"} mt={"20px"} >
        {tabIndex === 0 &&
          AllData.map((e) => <SkillCards key={e.title} {...e} />)}
        {tabIndex === 1 &&
          AllData.filter((e) => e.type == "FE").map((e) => (
            <SkillCards key={e.title} {...e} />
          ))}
        {tabIndex === 2 &&
          AllData.filter((e) => e.type == "BE").map((e) => (
            <SkillCards key={e.title} {...e} />
          ))}
        {tabIndex === 3 &&
          AllData.filter((e) => e.type == "tools").map((e) => (
            <SkillCards key={e.title} {...e} />
          ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Sklills;

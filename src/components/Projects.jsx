import { Flex, SimpleGrid, Stack } from "@mantine/core";
import { ProjectCard } from "./ProjectCard";
 
import MyTitle from "./MyTitle";
import { projectData } from "./Data";
import { useNavbarData } from "./NavbarContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Projects = () => {
  
  const { ref, inView, entry } = useInView({
    threshold: 0.5
  });

const [_,setLinkName] =  useNavbarData()

useEffect(() => {
 
  if(inView) {
    setLinkName('projects')
  }

}, [inView])


  return (
    <Flex ref={ref} id="projects" direction={"column"} mih={"100vh"} p={"0 10rem"}>
      <MyTitle title={"Projects"} des={"What I Provide"} />

      <SimpleGrid
        direction="row"
        cols={2}
        sx={{
          justify: "center",
          margin: "auto",
          rowGap: "40px",
          columnGap: "150px",
        }}
      >
        {projectData.map((e) => (
          <ProjectCard key={e.title} {...e} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;

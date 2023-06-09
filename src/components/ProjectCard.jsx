import { Flex, Title, Text, Group, Badge, Button } from "@mantine/core";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiChakraui,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiRedux,
  SiJson,
} from "react-icons/si";

import { BiLink } from "react-icons/bi";

import Player from "react-player";
// import Button from "./BubbleButton";

export const ProjectCard = ({ title,des,video,techStack,type,github, deploy }) => {
  const skills = [
    SiHtml5,
    SiCss3,
    SiReact,
    SiChakraui,
    SiJavascript,
    SiExpress,
    SiNodedotjs,
    SiMongodb,
    SiRedux,
    SiJson
  ];

  const colors = [
    "orangered",
    "#039BE5",
    "#00D7FF",
    "#38C7BC",
    "#FFD600",
    "black",
    "#8DC84D",
    "#46A539",
  ];

  return (
    <Flex
      direction="column"
      w="500px"
      className="project-card"
      bg="#eeeeee"
      sx={{
        borderRadius: "1rem",
        boxShadow: "0 0 5px #111",
        overflow: "hidden",
      }}
    >
      <video
        src={video}
        autoPlay
        playsInline
        muted
      />
      <img src="" alt="" />
      <Flex direction="column" p="1rem" gap="10px">
        <Flex w="100%" justify="space-between" align="center">
          <Title  className="project-title" order={3}>{title}</Title>
        
          <Badge variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
           {type}
          </Badge>
         
        </Flex>

        <Text className="project-description">
         {des}
        </Text>

        <Title align={"start"}  className="project-tech-stack" order={3}>
          Tech Stack:{" "}
        </Title>
        <Group>
          {techStack.map((i) => {
            const SkillIcon = skills[i];
            return <SkillIcon key={skills[i]} color={colors[i]}  size={20} />;
          })}
        </Group>

        <Group>
          <Button
            component="a"
            href={github} 
            target="_blank"
            variant="filled"
            radius="xl"
            rightIcon={<SiGithub size="0.9rem" />}
            className="project-github-link"
          >
            Github
          </Button>

          <Button
            component="a"
            href={deploy}
            target="_blank"
            variant="filled"
            radius="xl"
            className="project-deployed-link"
            rightIcon={<BiLink size="0.9rem" />}
          >
            Deployment
          </Button>
        </Group>
      </Flex>
    </Flex>
  );
};

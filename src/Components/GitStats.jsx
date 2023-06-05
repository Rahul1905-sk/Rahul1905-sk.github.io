import { Box, Flex, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";

import GitHubCalendar from "react-github-calendar";
import Fade from "react-reveal/Fade";
import MyTitle from "./MyTitle";
const GitStats = () => {
  const { primaryColor } = useMantineTheme();

  return (
    <div style={{ padding: "0 10rem" }}>
      <MyTitle title={"Github"} des={"what I code"} />
      <Flex direction={"column"} align={"center"}>
        <Flex direction={"column"} align={"center"}>
          <Text fz={"28px"} fw={"bold"}>
            Github{" "}
            <Text color={primaryColor} display={"inline-block"}>
              Calendar
            </Text>
          </Text>
          <GitHubCalendar
            style={{ width: "150%" }}
            username="Rahul1905-sk"
            color={"green"}
            // theme={'default'}
          />
        </Flex>
        <Flex gap={'10px'} p={'20px'} >
          <Flex direction={"column"} align={"center"}>
            <Text fz={"28px"} fw={"bold"}id="github-stats-card" >
              Github{" "}
              <Text color={primaryColor} display={"inline-block"}>
                Stats
              </Text>
            </Text>

            <img
              src="https://github-readme-stats.vercel.app/api?username=Rahul1905-sk&theme=default_border=false&include_all_commits=false&count_private=false"
              alt="git stats"
            />
          </Flex>
          <Flex direction={"column"} align={"center"}>
            <Text fz={"28px"} fw={"bold"} id="github-streak-stats">
              Github{" "}
              <Text color={primaryColor} display={"inline-block"}>
                Streaks
              </Text>
            </Text>

            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Rahul1905-sk&theme=default_border=false"
              alt="streaks"
            />
          </Flex>
        </Flex>
          <Flex direction={"column"} align={"center"}>
            <Text fz={"28px"} fw={"bold"} id="github-top-langs" >
              Github{" "}
              <Text color={primaryColor} display={"inline-block"}>
              Languages
              </Text>
            </Text>

            <img
              height={"195px"}
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rahul1905-sk&theme=default_border=false&include_all_commits=false&count_private=false&layout=compact"
              alt="Languages"
            />
          </Flex>
      </Flex>
    </div>
  );
};

export default GitStats;

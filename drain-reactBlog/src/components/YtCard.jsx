import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const YtCard = ({ source, title }) => {
  return (
    <VStack
      textAlign={"center"}
      bgColor="white"
      w={"80%"}
      m="auto"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
      justifyContent={"space-evenly"}
      borderRadius={"10px"}
      p="10px"
      h="400px"
    >
      <Text
        as={"b"}
        fontSize={"20px"}
        fontWeight={800}
        height="50px"
        color={"teal.500  "}
      >
        {title}
      </Text>
      <Box
        m={"auto"}
        position={"relative"}
        height={"300px"}
        rounded={"2xl"}
        boxShadow={"2xl"}
        width={"80%"}
        overflow={"hidden"}
        as={"iframe"}
        src={source}
        autoplay
        mute
      ></Box>
    </VStack>
  );
};

export default YtCard;

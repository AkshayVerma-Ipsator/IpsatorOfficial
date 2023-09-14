import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const VisionCards = ({ title, text, width = "40px" }) => {
  return (
    <VStack
      textAlign={"center"}
      bgColor="#FFBF69"
      w={"80%"}
      m="auto"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
      justifyContent={"space-evenly"}
      borderRadius={"10px"}
      p="10px"
      h="200px"
    >
      <Text
        as={"b"}
        fontSize={"25px"}
        fontWeight={800}
        height="50px"
        color={"teal.500  "}
      >
        {title}
      </Text>
      <Text h="150px" fontSize={"16"} alignContent={"center"} color={"white"} fontWeight={500}>
        {text}
      </Text>
    </VStack>
  );
};

export default VisionCards;

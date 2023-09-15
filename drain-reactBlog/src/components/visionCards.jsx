import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const VisionCards = ({ img, text, width = "40px" }) => {
  return (
    <VStack
      textAlign={"center"}
      bgColor="#FFBF69"
      w={"100%"}
      m="auto"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
      justifyContent={"space-evenly"}
      borderRadius={"10px"}
      p="10px"
      h="200px"
      gap="20px"
      textjustify="inter-word"
    >
      <Image src={img} width={"55px"}></Image>
      <Text  fontSize={"16"} alignContent={"center"} color={"white"} fontWeight={500} textAlign={"left"} px="20px">
        {text}
      </Text>
    </VStack>
  );
};

export default VisionCards;

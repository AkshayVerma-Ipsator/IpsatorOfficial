import { Image, Text, VStack } from "@chakra-ui/react";
import {PropTypes} from "prop-types"
const VisionCards = ({ img, text }) => {
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

VisionCards.propTypes={
  img:PropTypes.string.isRequired,
  text:PropTypes.string.isRequired
}

export default VisionCards;

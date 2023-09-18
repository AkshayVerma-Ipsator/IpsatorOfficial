
import { Text, VStack } from '@chakra-ui/react';
import PropTypes from "prop-types"
const Highlights = (props) => {
   const {first,text}=props
  return (
    <VStack bgColor={"RGB(238 216 114)"} textAlign={"center"} py="20px" borderRadius="8px">
        <Text fontWeight={"800"} color="rgba(255, 100, 82)" fontSize="24px">{first+" "}</Text>
        <Text w="80%" color="white" fontWeight={700} m="auto">{text}</Text>
    </VStack>
  );
}

Highlights.propTypes={
  first:PropTypes.string.isRequired,
  text:PropTypes.string.isRequired
}

export default Highlights;

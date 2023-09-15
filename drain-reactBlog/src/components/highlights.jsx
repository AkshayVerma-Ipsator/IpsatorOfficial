import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Highlights = ({first,text}) => {
  return (
    <VStack bgColor={"RGB(238 216 114)"} textAlign={"center"} py="20px" borderRadius="8px">
        <Text fontWeight={"800"} color="rgba(255, 100, 82)" fontSize="24px">{first+" "}</Text>
        <Text w="80%" color="white" fontWeight={700} m="auto">{text}</Text>
    </VStack>
  );
}

export default Highlights;

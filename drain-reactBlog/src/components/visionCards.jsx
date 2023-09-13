import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const VisionCards = ({img,text,width="40px"}) => {
  return (
   <VStack textAlign={"center"} bgColor="white" w={"80%"} m="auto" boxShadow= "rgba(0, 0, 0, 0.1) 0px 4px 12px;"  justifyContent={"space-evenly"} borderRadius={"10px"} p="10px" h="200px">
        <Image src={img} w={width}></Image>
        <Text>
            {text}
        </Text>
   </VStack>
  );
}

export default VisionCards;

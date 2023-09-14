import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Tech = ({url,title,text,extra=""}) => {
  return (
    <VStack bgColor={"white"} color="black" p="16px" borderRadius={"12px"} gap="16px" >
        <Heading fontSize={"20px"} fontWeight={600}>
            {title}
        </Heading>
        <Text color="gray.500">{text}</Text>
        
        <Box
          position={'relative'}
          height={'200px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'80%'}
          overflow={'hidden'}
          as={"iframe"} src={url} autoplay mute
          m="auto"
          > 
        </Box>
        <Text>{extra}</Text>
    </VStack>
  );
}

export default Tech;

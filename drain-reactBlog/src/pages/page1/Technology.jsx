import { Box, Container, HStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import CleaningBPD from '../../components/CleaningBPD';
import Dwmtp from '../../components/Dwmpt';
const Technology = () => {
  const [state,setState]=React.useState(false)
  return (
    <Container maxW={'7xl'} id="techDeploys" >
    <Box>
         <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }} textAlign={"center"} pt={100} pb={8}>
          <Text>
            Technology Deployments
          </Text>
          </Heading>
          <Box>
            <HStack justifyContent={"space-evenly"} bgColor="#feebc8" borderRadius={"12px"}>
              <Heading
              lineHeight={1.1} textAlign={"left"} py="24px" fontSize={"24px"} fontWeight={state?"700":"400"}
               bgColor={"#feebc8"} textDecoration={state &&"underline"} textUnderlineOffset={"10px"} cursor={"pointer"}
              
              onClick={()=>setState(true)}
              >Cleaning of Barapullah Drain</Heading>
              <Heading
             
              lineHeight={1.1} textAlign={"left"} py="10px" fontSize={"24px"} fontWeight={state?"400":"700"}
              textUnderlineOffset={"10px"}
              bgColor={"#feebc8"}
              textDecoration={!state &&"underline"} cursor={"pointer"}
              onClick={()=>setState(false)}
              >Decentralized Waste Management Technology Park</Heading>
            </HStack>
          {state?<CleaningBPD/>:<Dwmtp/>}
          </Box>
    </Box>
    </Container>
  );
}

export default Technology;

import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import CleaningBPD from '../../components/CleaningBPD';

const Technology = () => {
  return (
    <Container maxW={'7xl'} >
    <Box>
         <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }} textAlign={"center"} pt={100}>
          <Text>
            Technology Deployments
          </Text>
          <CleaningBPD/>
          </Heading>
    </Box>
    </Container>
  );
}

export default Technology;

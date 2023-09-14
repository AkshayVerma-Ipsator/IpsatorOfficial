import React from 'react';
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Icon,
    createIcon,
    SimpleGrid,
  } from '@chakra-ui/react'
import { VisionData, highlights } from '../../Data/data';
import VisionCards from '../../components/visionCards';
import Highlights from '../../components/highlights';

const Hero = () => {
  return (
    <Container maxW={'7xl'} >
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 15, md: 20 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
            //   content: "''",
            //   width: 'full',
            //   height: '30%',
            //   position: 'absolute',
            //   bottom: 1,
            //   left: 0,
            //   bg: 'red.400',
            //   zIndex: -1,
            }}>
            Waste To
          </Text>
          <br />
          <Text as={'span'}>
            Wealth Mission
          </Text>
        </Heading>
        <Text color={'gray.500'}>
        The Waste to Wealth Mission, spearheaded by the Office of the Principal Scientific Advisor to
        the Government of India (O/o PSA), aims at strengthening the waste management system in
        India by identifying and validating innovative technology solutions and models to achieve a
        zero landfill and zero waste nation. In line with its vision, the Mission has taken several
        initiatives in different areas of waste management, including technology demonstrations in
        multiple waste management domains, community engagement and development of an online
        portal which will act as a reference for all stakeholders including urban local bodies,
        government departments, technology companies, investors and citizens looking for
        comprehensive information on waste management technologies, policies and investment
        opportunities.
        </Text>
        <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>

        <Box
          position={'relative'}
          height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}
          as={"iframe"} src="https://www.youtube.com/embed/-dFtR0sGqmM" autoplay mute
          > 

        </Box>
      </Flex>
    </Stack>
    <Box bgColor="RGB(238 216 114)" paddingBottom="40px" borderRadius={"10px"} color="whiteAlpha">
      <Heading     
       lineHeight={1.1} fontWeight={600} textAlign={"center"} p="32px"
       fontSize={"44px"} color="white"
       >
          Vision
          </Heading>
      <SimpleGrid columns={{base:1,md:2}} gap={"20px"} m="auto">
          {VisionData.map((el,i)=><VisionCards key={i} img={el.img} width={el.width} text={el.text}/>)}
      </SimpleGrid>
    </Box>
      <Box  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" my="50px" borderRadius={"12px"} p="40px" bgColor={"RGB(138 170 229)"} color="white">
              <Heading 
                    lineHeight={1.1} fontWeight={600} textAlign={"center"} pb="32px"
                    fontSize={"50px"} color="white">
                Focus
              </Heading>
              <Text as="h3" textAlign={"center"} fontSize={"20px"} px="50px">
              The focus of our mission is to provide scientific and technological inputs towards
              conservation, sustainable use, and restoration of our land, air, and water resources. The
              technology solutions identified will support Urban Local Bodies (ULBs) to create circular
              economic models that are financially viable for waste management & streamline waste
              handling in the country.
              </Text>
      </Box>
      <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} py="24px" bgColor="orange.100">
      <Heading 
                    lineHeight={1.1} fontWeight={600} textAlign={"center"} py="24px"
                    fontSize={"36px"} color="blackAlpha.800" fontWeight="400">
                Highlights of initiatives under WASTE TO WEALTH MISSION
              </Heading>
              <SimpleGrid columns={4} gap="20px"w="90%" m="auto"mt="24px" >
                  {highlights.map((el,i)=><Highlights key={i} first={el.first} text={el.text}/>)}
              </SimpleGrid>
      </Box>
  </Container>
)
}

const PlayIcon = createIcon({
displayName: 'PlayIcon',
viewBox: '0 0 58 58',
d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
})

const Blob = (props) => {
return (
  <Icon
    width={'100%'}
    viewBox="0 0 578 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
      fill="currentColor"
    />
  </Icon>
  );
}

export default Hero;

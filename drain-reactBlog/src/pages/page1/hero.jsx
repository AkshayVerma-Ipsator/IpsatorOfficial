import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    SimpleGrid,
  } from '@chakra-ui/react'
import { VisionData, highlights } from '../../Data/data';
import VisionCards from '../../components/visionCards';
import Highlights from '../../components/highlights';
import "../../App.css"
const Hero = () => {
  return (
    <Container maxW={'7xl'}  >
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 15, md: 20 }}
      direction={{ base: 'column', md: 'row' }} id='about' className='scroll'>
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
      <SimpleGrid columns={{base:1,md:2}} gap="20px"  m="auto" w="80%">
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
      <Box  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} py="24px" bgColor="orange.100" borderRadius={"12px"} className='scroll' id="highlights" >
      <Heading 
                    lineHeight={1.1} fontWeight={400} textAlign={"center"} py="24px"
                    fontSize={"36px"} color="blackAlpha.800" >

                Highlights of initiatives under WASTE TO WEALTH MISSION
              </Heading>
              <SimpleGrid columns={{base:2,md:4}} gap="20px"w="90%" m="auto"mt="24px" >
                  {highlights.map((el,i)=><Highlights key={i} first={el.first} text={el.text}/>)}
              </SimpleGrid>
      </Box>
  </Container>
)
}



export default Hero;

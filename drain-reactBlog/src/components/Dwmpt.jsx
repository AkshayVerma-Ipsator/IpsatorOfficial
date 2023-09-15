import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { TbDirectionSignFilled } from "react-icons/tb";
import img1 from "../assets/cbpd/dwmtp.png"
import img2 from "../assets/cbpd/dwmtp1.png"
import { DecentralizedTech } from '../Data/data';
import Tech from './tech';

 const Dwmtp = () => {
  return (
    <Box color="black" bgColor="RGB(254 235 200)" borderRadius="12px" p="32px" my="32px">
    <Box
        position={'relative'}
        height={'300px'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        width={'full'}
        overflow={'hidden'}
        as={"iframe"} src="https://www.youtube.com/embed/qXO5rjRb9yA" autoplay mute
        my="32px"
        > 
    </Box>     
    <Box p="32px"my="32px" bgColor="rgb(227,180,72)" color="white">
        <Heading  lineHeight={1.1} textAlign={"left"} py="24px" borderRadius="12px"fontSize={"36px"} fontWeight="400">
                    Problem Statement
        </Heading>
        <Text fontSize="16px" fontWeight={"600"}>
        Unscientific disposal of mixed waste in open dumpsites
        generates harmful greenhouse emissions and contaminate soil and groundwater causing
        health and environment hazards to the city’s population. Presently, the 469 colonies
        across 64 wards in East Delhi generate on an average about 2200 tons per day of fresh
        municipal solid waste which is disposed unscientifically in five open dumpsites.
        Diverting this fresh waste from entering the landfills will be key to achieve the
        objective of zero landfill.
        </Text>
    </Box>
    <Box p="32px" my="32px" bgColor="rgb(238,216,114)" color="white">
        <Heading  lineHeight={1.1} textAlign={"left"} py="24px" fontSize={"36px"} fontWeight="400" color="white">
                    Technology Solution
        </Heading>
        <Text fontWeight={600}>
        Considering the challenges faced by urban and rural Local bodies, the Waste to Wealth
        Mission of the Office of the Principal Scientific Adviser to the Government of India, in
        collaboration with the erstwhile East Delhi Municipal Corporation (now MCD) set up
        a Decentralised Waste Management Technology Park in New Jaffrabad, East Delhi for
        onsite processing of fresh Municipal solid waste.

        <br />
        <br />
         Following 4 Technologies are
        deployed at the site:
        </Text>
        <SimpleGrid columns={{base:1,md:2}} gap="20px" mt="16px">
            {DecentralizedTech.map((el,i)=><Tech key={i} title={el.title} text={el.content} url={el.video}/>)}
        </SimpleGrid>
 
    </Box>
    <Box p="32px" my="10px" bgColor="white" color="green">
        <Heading  lineHeight={1.1} textAlign={"left"} py="24px" fontSize={"36px"} fontWeight="400">
                    Impact
        </Heading>
        <SimpleGrid columns={3} m="auto" w="80%" >
            <Box>
                 <Image src={img1} m="auto" w="100%" ></Image>
                 <Text textAlign={"center"}>Before</Text>

            </Box>
            <Box p="28%" px="38%">
                <TbDirectionSignFilled size={"80px"} />
            </Box>
            <Box>
                <Image src={img2} m="auto" w="100%"></Image>
                <Text textAlign={"center"}>After</Text>
            </Box>
        </SimpleGrid>
        <Text  w="80%" m="auto" fontSize={"16px"} fontStyle={"italic"} textAlign={"center"}> 
            Decentralized Waste Management Technology Park
        </Text>
    <Box p="32px">
        <Text fontWeight={600}>
        At the Technology Park, 10 TPD Municipal waste is onsite segregated and treated,
resulting in volume reduction and conversion into 1 TPD compostable fractions, 2 TPD
combustibles fractions, 1.5 TPD recyclables. The facility also has a waste compaction
unit for reducing the volume for handling & transportation. The combustible waste will
then be processed on-site, leaving only 5-10% of inerts reaching landfills. In addition
to incoming MSW, floating waste from the adjacent 52-cusec drain is also collected and
processed on-site.
<br />
<br />
This will also ensure SWM compliance of Urban Local Bodies under Solid Waste
Management Rules 2016 and for reducing the load on landfill sites, without the
procurement of new land for setup and disposal.
<br />
<br />
Decentralized processing of waste is a step towards “Zero Landfill” with the added
advantage of reduction in the transportation of the waste.
        </Text>
    </Box>
    </Box>
    </Box>
  );
}

export default Dwmtp

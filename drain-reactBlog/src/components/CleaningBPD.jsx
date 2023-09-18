import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

import cbpd1 from "../assets/cbpd/cbpd1.png"
import cbpd2 from "../assets/cbpd/cbpd2.png"
import cbpd3 from "../assets/cbpd/cbpd3.png"
import cbpd4 from "../assets/cbpd/cbpd4.png"
import { TbDirectionSignFilled } from "react-icons/tb";
const CleaningBPD = () => {
  return (
    <Box color="black" bgColor="RGB(254 235 200)" borderRadius="12px" p="32px" my="32px">
        <Box
          position={'relative'}
          height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}
          as={"iframe"} src="https://www.youtube.com/embed/4TIl-ysyhe0" autoplay mute
          my="32px"
          > 
        </Box>        
        <Box p="32px" bgColor="rgb(227,180,72)" color="white" borderRadius="12px">
            <Heading  lineHeight={1.1} textAlign={"left"} py="24px" fontSize={"36px"} fontWeight="400" >
                        Problem Statement
            </Heading>
            <Text fontSize="16px" fontWeight={"600"}>
                Cleaning of open drains in congested areas has always been a challenge in India
                because there is no or limited access for traditional equipment like Joseph Cyril
                Bamford (JCB) excavator, Poclain, etc. and human settlements on both sides of the
                drain with narrow passages make it impossible to dispose of the collected waste. The
                Barapullah drain in South Delhi is one such drain that is blocked at various locations
                with sewage, trash, and debris, resulting in foul odor, vector-borne diseases, unhygienic
                conditions, and flooding in the monsoons.
            </Text>
        </Box>
        <Box p="32px" my="10px" bgColor="rgb(238,216,114)" color="white" borderRadius="12px">
            <Heading  lineHeight={1.1} textAlign={"left"} py="24px" fontSize={"36px"} fontWeight="400" color="white">
                        Technology Solution
            </Heading>
            <Text fontWeight={600}>
                To address this critical problem, the Waste to Wealth Mission, one of the ten scientific
                missions of the Office of the Principal Scientific Adviser to the Government of India,
                collaborated with South Delhi Municipal Corporation (now Municipal Corporation of
                Delhi) to jointly pilot an indigenous, customized excavator - Drain Master DM-80,
                designed and developed by M/s Cleantec Infra Pvt. Ltd., Mumbai. The DM-80 unit was
                selected to address the critical gap area of technologies for cleaning congested urban
                drains clogged with mixed waste including construction and demolition debris which
                are very hard to dislodge and remove.
            </Text>

        <Box p="32px" borderRadius="12px">
            <SimpleGrid columns={2} m="auto" >
                <Image src={cbpd1} m="auto" w="70%"></Image>
                <Image src={cbpd2} m="auto" w="70%"></Image>
            </SimpleGrid>
                <Text  w="80%" mx="auto" fontSize={"16px"} fontStyle={"italic"}> 
                    Prof. Ajay Kumar Sood, the Principal Scientific Adviser (PSA) to the Government of
                    India (GoI) visited the stretch of Barapullah drain near Bhogal Market in South Delhi
                    to witness the indigenously designed drain-cleaning excavator ‘Drainmaster DM-80’
                    in operation.
                </Text>
        </Box>
        <Box p="32px" borderRadius="12px">
            <Text fontWeight={600}>
                It is a self-propelled, transportable, and amphibious machine with multipurpose
                attachments capable of removing 50-100 m3/day of waste and overcoming the limits
                of cleaning urban drains (with widths larger than 7 m) making it an important
                technology for use in urban areas in India.
            </Text>
        </Box>
        </Box>
        <Box p="32px" bgColor="white" color="green" borderRadius="12px">
            <Heading  lineHeight={1.1} textAlign={"left"} py="24px" fontSize={"36px"} fontWeight="400">
                        Impact
            </Heading>
            <SimpleGrid columns={3} m="auto" w="80%" >
                <Box>
                     <Image src={cbpd3} m="auto" w="100%" borderRadius="12px"></Image>
                     <Text textAlign={"center"}>Before</Text>

                </Box>
                <Box p="50%" px="40%">
                    <TbDirectionSignFilled size={"80px"} />
                </Box>
                <Box>
                    <Image src={cbpd4} m="auto" w="100%" borderRadius="12px"></Image>
                    <Text textAlign={"center"}>After</Text>
                </Box>
            </SimpleGrid>
            <Text  w="80%" m="auto" fontSize={"16px"} fontStyle={"italic"} textAlign={"center"}> 
                    Desilting of Barapullah drain
            </Text>
        <Box p="32px" borderRadius="12px">
            <Text fontWeight={600}>
            The DM-80 unit was in operation for a duration of one year from 3rd January 2022 to
            2nd January 2023. During this period, Cleantec Infra operated the unit to clean and
            desilt approximately a 3 km stretch of the Barapullah drain starting from Sundial Park
            to Jangpura, removing approximately 3000 tons of waste in the process. The Municipal
            Corporation of Delhi provided supporting equipment for the disposal of the waste
            removed from the drain.
            </Text>
        </Box>
        </Box>
        </Box>
  );
}

export default CleaningBPD;

import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Samaroh1 from "../assets/Samaroh1.png";
import Sam2 from "../assets/Sam2.png";
import Sam3 from "../assets/Sam3.png";
import Sam4 from "../assets/Sam4.png";

const Samaroh2 = () => {
  return (
    <Container maxW={"7xl"}>
      <Box
        bgColor="#CB997E"
        paddingBottom="40px"
        borderRadius={"10px"}
        color="whiteAlpha"
      >
        <Box>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={"44px"}
            textAlign={"center"}
            mt={10}
            padding={"32px"}
            color="white"
          >
            About the Samaroh
          </Heading>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={"40px"}
          alignItems={"center"}
          justifyContent={"center"}
          m="auto"
          p={"50px"}
        >
          <Box
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            p={10}
            borderRadius={"10px"}
          >
            <Text color={"white"}>
              To celebrate the work done by the fellows in the first year of
              this fellowship, the Waste to Wealth Mission hosted a 2-day event,
              the ‘Swachhta Saarthi Samaroh’, on 30th September and 1st October
              2022, in Delhi. All the SSFs from 27 States and 6 UTs under the
              2021 Cohort were invited to Delhi for the event. The event was
              held at the Indian Institute of Technology Delhi, Hauz Khas. It
              was attended by eminent dignitaries, including the Scientific
              Secretary at the Office of the PSA to the Government of India and
              other dignitaries from academic institutions, industries, Council
              of Scientific and Industrial Research (CSIR) labs, start-ups, etc
            </Text>
          </Box>
          <Box borderRadius={"10px"} w={"555px"} overflow={"hidden"}>
            <Image src={Samaroh1} w={"600px"} h={"320px"}></Image>
          </Box>

          <Box borderRadius={"10px"} w={"550px"} overflow={"hidden"}>
            <Image src={Sam2} w={"600px"} h={"320px"}></Image>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            p={10}
            borderRadius={"10px"}
          >
            <Text color={"white"}>
              This 2-day event gave the SSFs under the Waste to Wealth Mission
              an opportunity to showcase their work and the impact made within
              their community with their peers to a large audience, which will
              help in inspiring people across the nation to work toward waste
              management actively. In the first batch of the fellowship, the
              Mission selected 379 fellows but over the fellowship period, 344
              fellows were able to continue based on their ideas and action
              plans to tackle the enormous challenge of waste management
              scientifically and sustainably. As ambassadors of change, these
              344 fellows conducted over 2700 sensitization programmes.
            </Text>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            p={10}
            borderRadius={"10px"}
          >
            <Text color={"white"}>
              During the event, the fellows showcased their work done over the
              past year in the form of posters, prototypes, papers,
              presentations, and products in the event exhibition. The fellows
              displayed their work across 8 waste categories, and a total of
              over 100 posters and 60+ prototypes were displayed at the
              exhibition venue. 110 fellows from all 3 categories were
              felicitated for their excellent work in waste management space. 20
              fellows were also felicitated under Wellbeing Out of Waste (WOW)
              Program by I.T.C. Limited, with a fellowship amount of ₹5001 each
              for their efforts and the impactful work.
            </Text>
          </Box>
          <Box borderRadius={"10px"} w={"555px"} overflow={"hidden"}>
            <Image src={Sam3} w={"600px"} h={"320px"}></Image>
          </Box>
          <Box borderRadius={"10px"} w={"550px"} overflow={"hidden"}>
            <Image src={Sam4} w={"600px"} h={"320px"}></Image>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            p={10}
            borderRadius={"10px"}
          >
            <Text color={"white"}>
              As ambassadors of change, these 344 fellows conducted over 2700
              sensitization programmes, including workshops, cleanliness drives,
              technology interventions, development of prototypes, audio-video
              demonstrations, one-on-one discussions, and creation of innovative
              radio jingles, and sensitised over 3.1 lakh citizens.Limited, with
              a fellowship amount of ₹5001 each for their efforts and the
              impactful work. I.T.C also provided an opportunity to all the
              fellows to join the WOW programme within their operating
              states.The fellows displayed their work across 8 waste categories,
              and a total of over 
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Samaroh2;

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { CategoryData} from "../../Data/data";
import VisionCards from "../../components/visionCards";

const HeroPage2 = () => {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 15, md: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={
                {
                  //   content: "''",
                  //   width: 'full',
                  //   height: '30%',
                  //   position: 'absolute',
                  //   bottom: 1,
                  //   left: 0,
                  //   bg: 'red.400',
                  //   zIndex: -1,
                }
              }
            >
              Swacchta Saarthi
            </Text>
            <br />
            <Text as={"span"}>Fellowship</Text>
          </Heading>
          <Text color={"gray.500"}>
            The Swachhta Saarthi Fellowship is a programme initiated in July
            2021 by the Office of the PSA to the Government of India, under its
            Waste to Wealth Mission. The programme aims at sensitizing the
            communities towards waste management and offering innovative
            solutions for the conversion of waste to wealth by recognising young
            students from schools and colleges, citizens working in the
            community through Self Help Groups (SHGs), and sanitation workers.
            The fellowship inspires young citizens and community workers to
            participate in this programme and create value from the waste around
            them through their innovations, and ultimately form a wide network
            of waste warriors on the ground as Swachhta Saarthis.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          ></Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
            as={"iframe"}
            src="https://www.youtube.com/embed/JnpJ0s0uY9Y?si=V8D1Al8BzvYQLQjI"
            autoplay
            mute
          ></Box>
        </Flex>
      </Stack>
      <Box
        bgColor="#CB997E"
        paddingBottom="40px"
        borderRadius={"10px"}
        color="whiteAlpha"
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          textAlign={"center"}
          p="32px"
          fontSize={"44px"}
          color="white"
        >
          Categories
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={"5px"} m="auto">
          {CategoryData.map((el, i) => (
            <VisionCards
              key={i}
              width={el.width}
              text={el.text}
              title={el.title}
            />
          ))}
        </SimpleGrid>
        <Text>
          <Box p={10}>
            <Text
              color={"white"}
              as="h3"
              textAlign={"center"}
              fontSize={"18px"}
              fontWeight={600}
            >
              The Swachhta Saarthi Fellows (SSFs) selected under the three
              categories are supported with monthly fellowships of ₹500/-,
              ₹1,000/- and ₹2,000/- respectively for a period of one year.
            </Text>
          </Box>
        </Text>
      </Box>
    </Container>
  );
};


export default HeroPage2;

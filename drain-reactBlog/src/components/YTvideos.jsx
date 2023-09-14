import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { YTVideos } from "../Data/data";
import YtCard from "./YtCard";

const YTvideos = () => {
  return (
    <Container maxW={"7xl"}>
      <Box
        bgColor={" #f7e5c3"}
        paddingBottom="40px"
        borderRadius={"10px"}
        color="whiteAlpha"
      >
        <Box>
          <Heading
            lineHeight={1.1}
            fontWeight={300}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            textAlign={"center"}
            mt={10}
            padding={"32px"}
            color={"black"}
          >
            Videos
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
            m="auto"
          >
            {YTVideos?.map((video, index) => (
              <YtCard key={index} source={video.source} title={video.title} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
};

export default YTvideos;

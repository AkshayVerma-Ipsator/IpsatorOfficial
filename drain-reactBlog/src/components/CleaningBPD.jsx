import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
{/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/2Z5hg6vyJJI" title="Swachhta Saarthi Fellowship Cohort 2 - Pooja Khandelwal (C/107)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
const CleaningBPD = () => {
  return (
    <Box >
        <Box>
            <Heading  lineHeight={1.1} textAlign={"left"} py="24px" fontSize={"36px"} color="blackAlpha.800" fontWeight="400">
                        Problem Statement
            </Heading>
            <Text fontSize="16px">
            Cleaning of open drains in congested areas has always been a challenge in India
            because there is no or limited access for traditional equipment like Joseph Cyril
            Bamford (JCB) excavator, Poclain, etc. and human settlements on both sides of the
            drain with narrow passages make it impossible to dispose of the collected waste. The
            Barapullah drain in South Delhi is one such drain that is blocked at various locations
            with sewage, trash, and debris, resulting in foul odor, vector-borne diseases, unhygienic
            conditions, and flooding in the monsoons.
            </Text>
        </Box>
    </Box>
  );
}

export default CleaningBPD;

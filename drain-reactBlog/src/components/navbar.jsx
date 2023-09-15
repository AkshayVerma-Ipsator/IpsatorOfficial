import { 
    Box, 
    Flex, 
    Image,
    Text,
 } 
from '@chakra-ui/react';
import React from 'react';
import India from "../assets/india.png"
import satya from "../assets/satyamev.png"
import { AiFillInstagram,AiFillFacebook,AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"} px="100px" py="4px" bgColor="yellow.300">
        <Flex alignItems={"center"} gap="4px">
            <Image w="24px" src={India}/>
            <Text fontSize={"12px"}>GOVERNMENT OF INDIA</Text>
        </Flex>
        <Flex alignItems={"center"} gap="4px">
            <AiFillFacebook size={"25px"}/>
            <FaXTwitter size={"25px"}/>
            <AiFillInstagram size={"25px"}/>
            <AiFillYoutube size={"25px"}/>
        </Flex> 
    </Flex>
  );
}

export default Navbar;

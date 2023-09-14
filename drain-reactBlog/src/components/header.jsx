import { 
    Box, 
    Flex, 
    Image, 
    Text, 
    Divider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, } from '@chakra-ui/react';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import satya from "../assets/satyamev.png"
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Flex bgColor="#183b63" px={"100px"} py={"8px"} color="white" justifyContent={"space-between"} alignItems={"center"}>
        <Flex gap="20px">
            <Image w="28px" src={satya}/>
            <Flex flexDir={"column"}>
                <Text>Office of the Principal Scientific Adviser </Text>
                <Text>to the Government of India</Text>
            </Flex>
            <Divider orientation='vertical' height="44px"/>
            <Image w="140px" objectFit="contain"src={"https://www.wastetowealth.gov.in/static/media/waste-to-wealth-logo.65754b45.png"}/>
        </Flex>
        <Text as={Link} href="/" _hover={{cursor:"pointer"}}>Home</Text>
        <Text as={Link} href="/cohort" _hover={{cursor:"pointer"}}>Cohort</Text>
        <Menu >
            <MenuButton >
                <Text display={"flex"} alignItems={"center"} gap="4px">
                    Sections
                <FaChevronDown />
                </Text>
            </MenuButton>
            <MenuList color="black" display={"grid"} gridTemplateColumns={"rea"}>
                <MenuItem></MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    </Flex>
  );
}

export default Header;

import { 
    Flex, 
    Image, 
    Text, 
    Divider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
   } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa6';
import satya from "../assets/satyamev.png"
import { Link } from 'react-router-dom';
import "../App.css"
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
            <Image w="140px" objectFit="contain" src={"https://www.wastetowealth.gov.in/static/media/waste-to-wealth-logo.65754b45.png"}/>
        </Flex>
        <Link  to="/" _hover={{cursor:"pointer"}}>Home</Link>
        <Link  to="/cohort" _hover={{cursor:"pointer"}}>Cohort</Link>
        <Menu >
            <MenuButton >
                <Text display={"flex"} alignItems={"center"} gap="4px">
                    Sections
                <FaChevronDown />
                </Text>
            </MenuButton>
            <MenuList color="black" display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
            <a href='#about'><MenuItem>About</MenuItem></a>
                {/* <MenuItem></MenuItem> */}
                <a href="#highlights"><MenuItem>Highlights</MenuItem></a>
                <a href="#techDeploys"><MenuItem>Technology Deployments</MenuItem></a>
                <a href="#policies"><MenuItem>Policies</MenuItem></a>
                <a href="#teams"><MenuItem>Teams</MenuItem></a>
            </MenuList>
        </Menu>
    </Flex>
  );
}

export default Header;

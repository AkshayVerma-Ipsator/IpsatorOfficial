import React from 'react'

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    Divider,
  } from '@chakra-ui/react'
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
  import satya from "../assets/satyamev.png"
  import {Link} from "react-router-dom";
import { FaChevronDown } from 'react-icons/fa6';
const Links = ['Home', 'Cohort', 'Section']

const NavLink = (props) => {
    const { children } = props
  
    return (
      <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'underline',
        }}
        href={'#'}>
        <Link>{children}</Link>
      </Box>
    )
  }

const NewNavbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box >
        <Box px={{base:"0px",md:"50px",lg:"100px"}} bg={useColorModeValue('#183b63', 'gray.900')} color="white">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>

            <Flex gap="20px" justifyContent={"center"}>
                <Image w={{base:"5",sm:"5%",md:"25px",lg:"28px"}} src={satya}/>
                <Flex flexDir={"column"} justifyContent={"center"}>
                    <Text fontSize={{base:"5px",sm:"10px",md:"15px",lg:"16px"}} display={{base:"none",sm:"none",md:"inline"}}>Office of the Principal Scientific Adviser </Text>
                    <Text fontSize={{base:"5px",sm:"10px",md:"15px",lg:"16px"}} display={{base:"none",sm:"none",md:"inline"}}>to the Government of India</Text>
                </Flex>
                <Divider orientation='vertical' height="44px" display={{base:"none",sm:"none",md:"none"}}/>
                <Image w="140px" objectFit="contain"src={"https://www.wastetowealth.gov.in/static/media/waste-to-wealth-logo.65754b45.png"}/>
            </Flex>

            </Box>
            
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Box
                as="a"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                textDecoration: 'underline',
                }}
                >
                <Link to="/">Home</Link>
            </Box>
            <Box
                as="a"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                textDecoration: 'underline',
                }}
                >
                <Link to="/cohort">Cohort</Link>
            </Box>
            <Box
                as="a"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                textDecoration: 'underline',
                }}
                >
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
            </Box>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}

export default NewNavbar
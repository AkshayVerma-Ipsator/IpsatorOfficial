import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";
import { policies } from "../Data/data";

const Policies = () => {

  return (
    <Box mt="50px" id="policies">
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        textAlign={"center"}
        mb={'30px'}
      >
        Policies
      </Heading>
      <SimpleGrid
        columns={[1,4]}
        gap={10}
        p={5}
        width={'80%'}
        m="auto"
        
      >
        {policies?.map((mainHeading) => (
          <Menu key={mainHeading.main} >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} width='100%' h='65px' border={'1px solid grey'}>
              {mainHeading.main}
            </MenuButton>
            <MenuList width={['400px','600px']} p={5}>
              {mainHeading.sub.map((sub)=>{
                return (<Flex key={sub.description} direction={'column'} p={2}>
                <Heading fontSize={'22px'}>{sub.title} :</Heading>
                <UnorderedList ml="20px" fontSize={'14px'}>{sub?.description?.map((el)=><MenuItem fSize={'15px'} key={el}><ListItem>{el}</ListItem></MenuItem>)}</UnorderedList>
                </Flex>)
              })}
            </MenuList>
          </Menu>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Policies;

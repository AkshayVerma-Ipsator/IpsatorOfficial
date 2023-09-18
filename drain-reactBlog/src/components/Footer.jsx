import { ArrowForwardIcon } from "@chakra-ui/icons";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FooterData } from "../Data/data";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      bgColor="#183b63"
      px={"100px"}
      py={"8px"}
      color="white"
      h={"auto"}
      pb={10}
    >
      <Container maxW={"7xl"}>
        <Flex
          py={"30px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"40px"}
        >
          <Image
            w="140px"
            objectFit="contain"
            src={
              "https://www.wastetowealth.gov.in/static/media/waste-to-wealth-logo.65754b45.png"
            }
          />
          <Button
            py={"20px"}
            rightIcon={<ArrowForwardIcon />}
            color={"white"}
            bgColor={"#2BA749"}
            _hover={{ backgroundColor: "facebook.400" }}
          >
            Become a technology partner
          </Button>
        </Flex>

        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"40px"}
        >
          {FooterData?.map((footer, index) => {
            return (
              <Box key={index}>
                <Text as={"b"} fontSize={"20px"} textAlign={"center"}>
                  {footer.head}
                </Text>
                <UnorderedList mt={5}>
                  {footer?.tags?.map((tag, index) => {
                    return (
                      <ListItem
                        ml={"-15px"}
                        key={index}
                        color={"gray.300"}
                        listStyleType={"none"}
                        textAlign="left"
                        fontSize={"18px"}
                        
                      >
                        <a href="#about">
                        {tag}
                        </a>
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
            );
          })}
        </Flex>
        <br />
        <hr />

        <Flex mt={5} gap={5}>
          <Text as={"b"}>Socials: </Text>
          <Flex gap={2}>

          <AiFillFacebook size={"25px"} />
          <FaXTwitter size={"25px"} />
          <AiFillInstagram size={"25px"} />
          <AiFillYoutube size={"25px"} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

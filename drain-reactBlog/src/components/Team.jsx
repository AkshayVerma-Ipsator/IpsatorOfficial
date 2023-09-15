import {
  Flex,
  Image,
  Text,
  Box,
  SimpleGrid,
  Center,
  Heading,
} from "@chakra-ui/react";
import { team } from "../Data/data";
import PropTypes from 'prop-types';

const EmployeeCard = ({ name, profession, imageSrc }) => {
  return (
    <Box
      maxW="250px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={2}
      bgColor="white"
      textAlign="center"
      transition={["transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out","transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"]}
      _hover={{
        transform: "scale(1.05)",
        boxShadow: ["md", "lg"],
        bgColor: ["gray.200", "gray.100"],
      }}
  
    >
      <Center
        border={"1px solid grey"}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
        width={["100%", "80%"]}
        borderRadius={"50%"}
        height={["165px", "180px"]}
        m={"auto"}
      >
        <Image
          src={imageSrc}
          alt={name}
          height={["165px", "180px"]}
          width={["100%", "100%"]}
          borderRadius={"50%"}
          objectFit="cover"
        />
      </Center>
      <Text fontWeight="bold" fontSize={["sm", "lg"]} mt={2}>
        {name}
      </Text>
      <Text color="gray.500" fontSize={["sm", "md"]}>
        {profession}
      </Text>
    </Box>
  );
};

const TeamContainer = () => {
  return (
    <Flex mt={5} mb={20} direction="column" alignItems="center" id="teams">
      <br />
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        textAlign={"center"}
        mt="100px"
        mb={10}
        cursor={"pointer"}
        _hover={{ textDecoration: "underline" }}
      >
       Team
      </Heading>
      <SimpleGrid columns={[2, 3, 4]} spacing={10} p={2}>
        {team.map((employee) => (
          <EmployeeCard
            key={employee.name}
            name={employee.name}
            profession={employee.profession}
            imageSrc={employee.imageSrc}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default TeamContainer;

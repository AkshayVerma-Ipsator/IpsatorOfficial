import {ReactElement, useState} from 'react';
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Divider,
    Button,
  } from '@chakra-ui/react'
  import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';


const Feature = ({ text, icon, iconBg }) => {

   

    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    )
  }

const Cohort1 = () => {
    const [showLines,setLine] = useState(false);
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          
          <Heading lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>SSF Cohort 1</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          A total of 1062 applications were received from across the country (from Jammu & Kashmir,
            Ladakh, Tamil Nadu, Mizoram, Gujarat, the Andaman & Nicobar Islands, and more), for the
            2021 Cohort.
            Out of the 1062 applications, 379 SSFs were selected from 27 States and 6 Union Territories,
            based on their proposed ideas and action plans to tackle the challenge of waste management
            scientifically and sustainably.
            An 8-member expert committee (nominated by the Office of the PSA to the Government of
            India) evaluated a total of 3800 reports submitted by the fellows and provided critical feedback
            on the portal to each fellow for improvements within their specific projects going forward, over
            a course of 12 months. Based on the evaluations and feedback on the individual project reports,
            the respective monthly fellowship amount was disbursed to the fellows across India.
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://i.imgur.com/ibB6VZ4.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
            <Divider/>
            <Divider/>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt="70px">
        
      <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://i.imgur.com/jBT2MQg.png'
            }
            objectFit={'scale-down'}
          />
        </Flex>
        <Stack spacing={4}>
          
          <Heading lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>Work by Fellows</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          The SSF programme has demonstrated that citizens, young and old, have a great deal of interest
            and enthusiasm for working toward waste management. Numerous fellows have developed new
            ideas into products, prototypes, and technological innovations. Many of these fellows are eager
            to take their ideas further towards building their own start-ups. The fellows have demonstrated
            their entrepreneurial acumen by involving community workers, especially underprivileged
            people, and generating employment for them.
            The SSFs have been successful in encouraging their peers and the community to manage their
            waste by raising awareness through a variety of sensitization campaigns. The fellows have
            conducted their proposed activities quite actively and consider themselves the torchbearers of
            this programme because of this sensitisation through the award of the fellowship. The most
            admirable feature of the programme is the fellows' dedication to transforming "Waste to
            Wealth" through their modest but honest activities.
          </Text>
        </Stack>
        
      </SimpleGrid>
      <Divider/> <Divider/>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt="70px">
        <Stack spacing={4}>
          
          <Heading lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>Work by Fellows</Heading>
          <Text color={'gray.500'} fontSize={'lg'} noOfLines={showLines === false ? "18" : "50"}>
          Most of the SSFs have emphasised on the significance of waste segregation at source itself and
            have tried to raise awareness of the advantages of appropriate source segregation in the
            community. They claim that because of their actions, their friends, family, neighbours, and
            community members have now actively begun source segregation, which is assisting in the
            delivery of the segregated waste to the appropriate recycling and composting facilities. To
            provide solutions for efficient waste management, many SSFs have been collaborating closely
            with local authorities and other stakeholders from various organisations. The SSFs’ initiatives
            have also resulted in a considerable change in society in terms of cleanliness.
            From time to time, fellows have been recognised for their waste-to-wealth initiatives. Many of
            their activities have also been publicised in the form of pamphlets, posters, and videos on social
            media platforms and via print media. The programme has reported a significant impact on the
            community/environment (homes, schools, villages, communities, industries) through increased
            community involvement which has led to positive behavioural changes of citizens towards
            effective waste management, a decrease in waste production, and cleanliness.
            The fellowship has produced a number of products and prototypes that the fellows can now
            develop further for commercialization and scaling up by utilising the platform and networking
            opportunities provided under the fellowship.
            The intention of the fellows to continue working for the cause in society beyond the fellowship
            term is what is most inspiring. Many of them have plans to advance their innovative
            ideas/solutions towards validation and towards the start-up level, to make a noticeable
            difference in society. The most significant accomplishment of this programme is the instillation
            of a culture of waste management among the fellows.
          </Text>
          <Button onClick={()=> setLine(!showLines)}>Show More</Button>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://i.imgur.com/VLd2BES.png'
            }
            objectFit={showLines === false ? "scale-down" : "contain"}
          />
        </Flex>
      </SimpleGrid>


    </Container>
  )
}

export default Cohort1
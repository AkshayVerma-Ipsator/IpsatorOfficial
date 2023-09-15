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

const DropDown = () => {
  const policies = [
    {
      main: "Municipal Solid Waste",
      sub: [
        { title: "Acts/Rules", description: ["SWM Rules 2016 & amendments"] },
        {
          title: "Policies/Reports",
          description: [
            "Bulk waste generators pdf by MOHUA",
            "Legacy waste report by CPCB",
            "MSW Annual Report 2018-19 CPCB",
            "Protocol for evaluation of technology in waste management CPCB 2021",
          ],
        },
        {
          title: "Central Guidelines",
          description: [
            "Advisory on decentralized composting by MOHUA",
            "Amendment in Guidelines on the Provision of buffer zone around waste processing and disposal facilities issued under SWM Rules, 2016",
            "CPCB issued guidelines on Buffer Zone around waste processing and disposal facilities in April, 2017",
            "CPHEEO manual on MSW part 1",
            "CPHEEO manual on MSW part 2",
            "CPHEEO manual on MSW part 3",
            "Final Guidelines for Carcass Disposal",
            "Guidelines For Management Of Sanitary Waste",
            "Guidelines on for Disposal of Legacy Waste (Old Municipal Solid Waste) by CPCB",
            "Protocol for Evaluation of Technology for Waste Management",
          ],
        },
      ],
    },
    {
      main: "C and D Waste",
      sub: [
        {
          title: "Acts/Rules",
          description: ["C&D waste rules 2016 & amendments"],
        },
        {
          title: "Policies/Reports",
          description: [
            "C&D waste ready reckoner by Building Materials & Technology Promotion Council Ministry of Housing & Urban Affairs Government of India",
          ],
        },
        {
          title: "Central Guidelines",
          description: [
            "Guidelines On Environmental Management Of Construction & Demolition (C & D) Wastes",
            "Strategy for Promoting Processing of Construction and Demolition (C&D) Waste and Utilisation of Recycled Products by MOHUA",
          ],
        },
      ],
    },
    {
      main: "Plastic Waste",
      sub: [
        {
          title: "Acts/Rules",
          description: [
            "Draft Notification on Extended Producer Responsibility (EPR)",
            "Draft Plastic Waste Management Rules, 2022",
            "Implementation of plastic waste rules",
            "Plastic Waste Management Rules, 2016, as amended, 2021",
            "Plastic waste Rules 2016 & amendments",
          ],
        },
        {
          title: "Policies/Reports",
          description: ["Plastic waste annual report 2019-20"],
        },
        {
          title: "Central Guidelines",
          description: [
            "A Document on Guidelines for Disposal of Thermoset Plastic Waste including Sheet moulding compound (SMC)/Fiber Reinforced Plastic (FRP)",
            "Consolidated Guidelines for Segregation, Collection and Disposal of Plastic Waste",
            "Guidelines for Co-processing of Plastic Waste in Cement Kilns",
            "Guidelines for the Disposal of Non-recyclable Fraction (Multi-layered) Plastic Waste",
            "Revised SoPs for Grant of EPR-Authorisation under E-Waste (Management) Rules, 2016 as Amended (Approved on 12th April, 2018)",
          ],
        },
      ],
    },
    {
      main: "E Waste",
      sub: [
        {
          title: "Acts/Rules",
          description: [
            "E-Waste (Management) Amendment Rules, 2018",
            "E-waste Rules 2016",
          ],
        },
        {
          title: "Policies/Reports",
          description: [
            "Business Model Toolbox for Setting up E-Waste Recycling Facility in India",
            "List of authorized E-waste recyclers",
            "List of Registered battery waste recyclers with CPCB",
            "List of registered PROs for E-waste",
          ],
        },
        {
          title: "Central Guidelines",
          description: [
            "Guidelines on Implementation of E-Waste (Management) Rules, 2016 by CPCB",
          ],
        },
      ],
    },
    {
      main: "Biomedical Waste",
      sub: [
        {
          title: "Acts/Rules",
          description: [
            "Bio-medical Waste Management Rules, 2016 (Amended) - 10.05.2019",
            "Bio-medical Waste Management Rules, 2016 (Amended) - 16.03.2018",
            "Bio-medical Waste Management Rules, 2016 (Amended) - 19.02.2019",
            "Biomedical waste Rules 2016",
          ],
        },
        {
          title: "Policies/Reports",
          description: ["Biomedical waste management report - CPCB-2019"],
        },
        {
          title: "Central Guidelines",
          description: [
            "Guidelines for Handling, Treatment and Disposal of Waste Generated during Treatment/Diagnosis/Quarantine of COVID-19 Patients",
            "Consolidated Status Report in the matter of OA NO. 72 of 2020 (NGT guidelines for COVID Waste)",
          ],
        },
      ],
    },
    {
      main: "Hazardous Waste",
      sub: [
        {
          title: "Acts/Rules",
          description: [
            "Hazardous and other Wastes (Management & Transboundary Movement) Amendment Rules, 2017",
            "Hazardous and other Wastes (Management & Transboundary Movement) Amendment Rules, 2018",
            "Hazardous and other Wastes (Management & Transboundary Movement) Amendment Rules, 2019",
            "Hazardous and other Wastes (Management & Transboundary Movement) Rules, 2016",
          ],
        },
        {
          title: "Policies/Reports",
          description: [
            "First Amendments Rules, 06.07.2016",
            "Fourth Amendments Rules, 01.03.2019",
            "Hazardous waste report 2019-20",
            "Second Amendments Rules, 28.02.2017",
            "Third Amendments Rules, 11.06.2018",
          ],
        },
        {
          title: "Central Guidelines",
          description: [
            "Enforcement Framework for Effective Implementation of Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016",
            "Guidance Document for Conducting Environmental Audit of Common/Captive Treatment, Storage and Disposal Facilities (TSDFs)",
            "Guidelines for Environmentally Sound Facilities for Handling, Processing and Recycling of End-of-Life Vehicles (ELV)",
            "Guidelines for Preparation of Inventories on Hazardous and Other Waste Generation and their Management",
            "Guidelines on Framework on Identification of Materials Generated from Industrial Processes as Wastes or By-products",
            "Protocol for assessing proposals of Development Projects in buffer zone of closed TSDF",
            "SOP for disposal of BMW including pandemic medical waste through incineration in common hazardous waste treatment, storage and disposal facility",
          ],
        },
      ],
    },
    {
      main: "Sewage Treatment",
      sub: [
        {
          title: "Acts/Rules",
          description: [
            "G.S.R.221(E), [23/03/2015] - Central Pollution Control Board (Qualifications and Terms and Conditions of Service of Chairman) Rules, 2015",
            "No.06 of 1974, [23/03/1974] - The Water (Prevention and Control of Pollution) Act, 1974",
            "The Water (Prevention and Control of Pollution) Cess Act, 1977 ",
          ],
        },
        {
          title: "Policies/Reports",
          description: [
            "National Inventory on Sewage Treatment Plant Report March 2021",
          ],
        },
        {
          title: "Central Guidelines",
          description: ["N.A"],
        },
      ],
    },
    {
      main: "Climate Change",
      sub: [
        { title: "Acts/Rules", description: ["N.A"] },
        {
          title: "Policies/Reports",
          description: [
            "India Third Biennial Update Report to The United Nations Framework Convention on Climate Change",
          ],
        },
        {
          title: "Central Guidelines",
          description: ["N.A"],
        },
      ],
    },
  ];

  return (
    <Box pb={10}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        textAlign={"center"}
        mt="100px"
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
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width='100%' h='65px' border={'1px solid grey'}>
              {mainHeading.main}
            </MenuButton>
            <MenuList  width={['400px','600px']} p={5}>
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

export default DropDown;

import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

const DropDown = () => {


    let values = [
        {
            id:1,
            main:"Municipal Solid Waste",
            arr:["SWM Rules 2016 & amendments","Bulk waste generators pdf by MOHUA","Legacy waste report by CPCB","MSW Annual Report 2018-19 CPCB","Protocol for evaluation of technology in waste management CPCB 2021","Advisory on decentralized composting by MOHUA","Amendment in Guidelines on the provision of buffer zone around waste processing and disposal facilities issued under SWM Rules, 2016","CPCB issued guidelines on Buffer Zone around waste processing and disposal facilities in April, 201","CPHEEO manual on MSW part 1","CPHEEO manual on MSW part 2","CPHEEO manual on MSW part 3","Final Guidelines for Carcass Disposal","Guidelines For Management Of Sanitary Waste","Guidelines on for Disposal of Legacy Waste (Old Municipal Solid Waste) by CPCB"]
        },
        {
            id:2,
            main:"C and D Waste",
            arr:["C&D waste rules 2016 & amendments","C&D waste ready reckoner by Building Materials & Technology Promotion Council Ministry of Housing & Urban Affairs Government of India","Guidelines On Environmental Management Of Construction & Demolition (C & D) Wastes","Strategy for Promoting Processing of Construction and Demolition (C&D) Waste and Utilisation of Recycled Products by MOHUA"]
        },
        {
            id:3,
            main:"Plastic Waste",
            arr:["Draft Notification on Extended Producer Responsibility (EPR)","Draft Plastic Waste Management Rules, 2022","Implementation of plastic waste rules","Plastic Waste Management Rules, 2016, as amended, 2021","Plastic waste annual report 2019-20","A Document on Guidelines for Disposal of Thermoset Plastic Waste including Sheet moulding compound (SMC)/Fiber Reinforced Plastic (FRP)","Consolidated Guidelines for Segregation, Collection and Disposal of Plastic Waste","Guidelines for Co- processing of Plastic Waste in Cement Kilns","Guidelines for the Disposal of Non- recyclable Fraction (Multi-layered) Plastic Waste","Revised SoPs for Grant of EPR- Authorisation under E-Waste (Management) Rules, 2016 as Amended'' Approved on 12th April, 2018"]
        },
        {
            id:4,
            main:"E Waste ",
            arr:["E- Waste (Management) Amendment Rules, 2018","E-waste Rules 2016","Business Model Toolbox for Setting up E-Waste Recycling Facility in India","List of authorized E-waste recyclers","List of Registered battery waste recyclers with CPCB","Guidelines on Implementation of E- Waste (Management) Rules, 2016 by CPCB"]
        },
        {
            id:5,
            main:"Biomedical Waste ",
            arr:["Bio-medical Waste Management Rules, 2016 (Amended) - 10.05.2019","Bio-medical Waste Management Rules, 2016 (Amended) - 16.03.2018","Bio-medicalWasteManagementRules, 2016(Amended) - 19.02.2019","Biomedical waste management report - CPCB-2019","Biomedical waste management report - CPCB-2019"]
        },
        {
            id:6,
            main:"Hazardous Waste",
            arr:["Hazardous and other Wastes (Management & Transboundary Movement) Amendment Rules, 2017","Hazardous and other Wastes","Hazardous and other Wastes (Management & Transboundary Movement) Amendment Rules, 2019","First Amendments Rules,06.07.2016","Fourth Amendments Rules, 01.03.2019"," Hazardous waste report 2019-20","Second Amendments Rules, 28.02.2017","Enforcement Framework for Effective Implementation of Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016","Guidelines for Environmentally Sound Facilities for Handling, Processing and Recycling of End- of- Life Vehicles (ELV)","Guidelines for Preparation of Inventories on Hazardous and Other Waste Generation and their Management","SOP for disposal of BMW including pandemic medical waste through incineration in common hazardous waste treatment, storage and disposal facility"]
        },
        {
            id:7,
            main:"Sewage Treatment ",
            arr:["G.S.R.221(E), [23/03/2015] - Central Pollution Control Board (Qualifications and Terms and Conditions of Service of Chairman) Rules, 2015","No.06 of 1974, [23/03/1974] - The Water (Prevention and Control of Pollution) Act, 1974","National Inventory on Sewage Treatment Plant Report March 2021"]
        },
        {
            id:8,
            main:"Climate Change",
            arr:["India Third Biennial Update Report to The United Nations Framework Convention on Climate Change"]
        }
    ]

  return (
    // <Container maxw={"7xl"}>
    <Box id="policies">
     <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }} textAlign={"center"} mt="100px">  
          Policies
          
        </Heading>
    <Box style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",width:"100%"}} maxW="7xl" m="auto" p="16px">
        {values?.map((el)=>(
            <Menu key={el.id}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {el.main}
            </MenuButton>
            <MenuList>
                {el.arr.map((e,i) => <MenuItem  key={i}><a href="https://drive.google.com/drive/folders/1HbFUMlQpBKV3kVka5FJsSziX5gugRVHH?usp=sharing" rel="noreferrer" target="_blank" >{e}</a></MenuItem>)}
            </MenuList>
        </Menu>
        ))}
    {/* </div> */}
     </Box>
    </Box>
  )
}

export default DropDown
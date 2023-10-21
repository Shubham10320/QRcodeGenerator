import React from 'react'
import qr from '../assets/qr.png'
import upload from '../assets/upload.png'
import downlaod from '../assets/download.png'
import {Box, Center,Text, Flex, Heading, Image} from '@chakra-ui/react'

const MainSection = () => {

  return (
    <Box background="linear-gradient(315deg, #70b2d9 0%, #39e5b6 74%)" p="50px">
        <Heading textAlign="center" color="white" as="h1"fontSize={{base:"30px", sm:"35px", md:'40px', lg:"45px", xl:"50px"}} fontWeight="bold">How to make QR code.</Heading>
        <Flex flexDirection={{base:'column', sm:"column", md:'column', lg:"row", xl:"row"}} justifyContent="space-around" mt="25px" gap="10px">

            <Box bg="white" p="20px" borderRadius="18px">
                 <Box display="flex" alignItems="center">
                    <Image src={upload}/>
                    <Text fontSize="20px" fontWeight="bold" ml="5px">1. Select</Text>
                </Box>
                 <Text fontSize="13px" ml="42px">Choose a URL and paste it into the generator.</Text>
            </Box>

            <Box bg="white" p="20px" borderRadius="18px">
                 <Box display="flex" alignItems="center">
                    <Image src={qr} w="40px"/>
                    <Text fontSize="20px" fontWeight="bold" ml="5px">2. Generate.</Text>
                </Box>
                 <Text fontSize="13px" ml="42px">Create your QR code and customize the style and color.</Text>
            </Box>

            <Box bg="white" p="20px" borderRadius="18px">
                 <Box display="flex" alignItems="center">
                    <Image src={downlaod}/>
                    <Text fontSize="20px" fontWeight="bold" ml="5px">3. Download.</Text>
                </Box>
                 <Text fontSize="13px" ml="42px">Select your desired file type and download your QR code</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default MainSection
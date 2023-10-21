import React from 'react'
import heroSectionImage from '../assets/heroSectionImage.jpg'
import { Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate= useNavigate();

  return (
    <Box w={{base:"100%",sm:"100%",md:"100%", lg:"90%",xl:'90%'}} p="20px" m="auto" display="flex">
        <Flex flexDirection={{base:"column", sm:"column", md:'column', lg:'row', xl:'row'}} gap="10px" >
            <Box w={{lg:"50%",xl:'50%'}}>
                <Heading as='h1' bgGradient="linear(315deg, #70b2d9 0%, #39e5b6 74%)"  bgClip='text' fontSize={{base:'35px', sm:'40px', md:'45px', lg:'50px', xl:'50px'}} fontWeight="extrabold">Create custom QR codes for free with our generator.</Heading>
                <Text mt="25px" fontSize={{base:'14px', sm:'15px', md:'17px', lg:'18px', xl:'18px'}}>Simply input your information and download the high-resolution code for easy sharing and tracking.</Text>
                <Button onClick={()=>navigate('/textqr')} mt={{base:"10px", sm:"12px", md:'15px', lg:"20px", xl:"60px"}} background="teal" color="white" p="25px" borderRadius="30px" _hover={{background:'lightgreen', color:'black'}}>Create your QR code now</Button>
            </Box>

            <Spacer/>

            <Box  w={{base:"100%", sm:"100%",md:"100%", lg:"48%", xl:"48%"}}>
                <Image src={heroSectionImage} m="auto" h={{base:"100%", sm:"300px",md:"400px"}} />
            </Box>
        </Flex>
    </Box>
  )
}

export default HeroSection
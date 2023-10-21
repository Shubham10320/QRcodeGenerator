import React from 'react'
import heroSectionImage from '../assets/heroSectionImage.jpg'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'

const HeroSection = () => {
  return (
    <Box w="90%" p="20px" m="auto">
        <Flex justifyContent="space-between" flexDirection={{base:'column', sm:'column', lg:'row', xl:'row'}} gap="150px">
            <Box>
                <Heading as='h1' fontSize="50px" fontWeight="extrabold">Create custom QR codes for free with our generator.</Heading>
                <Text mt="30px" fontSize="18px">Simply input your information and download the high-resolution code for easy sharing and tracking.</Text>
                <Button mt="70px" background="teal" color="white" p="25px" borderRadius="30px">Create your QR code now</Button>
            </Box>
            <Box>
                <Image src={heroSectionImage} w="1200px" h="400px"/>
            </Box>
        </Flex>
    </Box>
  )
}

export default HeroSection
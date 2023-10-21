import { Box, Center, Divider, Flex, HStack, Image, Text} from '@chakra-ui/react'
import React from 'react'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import linkedIn from '../assets/linkedIN.png'
import internet from '../assets/internet.png'
import gmail from '../assets/gmail.png'
import home from '../assets/home.png'

const Footer = () => {
   

  return (
    <Box background="#ffffff" mt="20px" p="50px">
        <Flex justifyContent="space-between" flexDirection={{base:"column", sm:'column', md:'row', lg:'row', xl:'row'}}>
            <Box>
                <Text bgGradient="linear(315deg, #70b2d9 0%, #39e5b6 74%)"  bgClip='text' fontSize={{base:'30px', sm:'35px', md:'35px', lg:'40px', xl:'45px'}} fontWeight="extrabold" >Get in Touch</Text>
                <Text w={{base:'100%', sm:'100%', md:'100%', lg:'70%', xl:'70%'}} fontSize="14px">Take a look of all my works and project. I have made several project using latest technology MERN Stack.</Text>
                <HStack mt="20px">
                    <Image src={instagram} w="25px"/>
                    <Image src={github} w="25px"/>
                    <Image src={linkedIn} w="25px"/>
                    <Image src={gmail} w="25px"/>
                </HStack>
            </Box>

           <Flex gap="50px" alignItems="center" flexDirection={{base:"column", sm:'column', md:'row', lg:'row', xl:'row'}} mt="30px">
           <Box w="100%"  p="40px" borderRadius="18px 0 18px 0" boxShadow="20px 20px 67px #898989,-20px -20px 67px #ffffff" >
                <Box>
                    <Image src={internet} m="auto" w="30px"/>
                     <Text textAlign="center">Shubham10320.github.io</Text>
                </Box>
            </Box>

            <Box w="100%" p="40px" borderRadius="18px 0 18px 0" boxShadow="20px 20px 67px #898989, -20px -20px 67px #ffffff" >
                <Box>
                    <Image src={home} m="auto" w="30px"/>
                     <Text textAlign="center">Mumbai, Maharashtra</Text>
                </Box>
            </Box>
           </Flex>
        </Flex>

       <Divider  orientation='horizontal' variant="solid" m="auto" mt="30px" w="100%" border="10" borderColor="teal"/>
       <Center>@2023 Copyright Received</Center>
    </Box>
  )
}

export default Footer
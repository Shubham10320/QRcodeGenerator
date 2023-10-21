import React, { useState } from 'react'
import person from '../assets/person.png'
import logo from '../assets/logo.webp'
import {HamburgerIcon} from '@chakra-ui/icons'
import { Box, Flex, HStack, Image,Button, Text,Popover,PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton } from '@chakra-ui/react'

const Navbar = () => {
    const [register, setRegister]=useState('CREATE ACCOUNT');
    const hoverColor={
        color:'teal',
        textDecoration:"underline"
    }
    

  return (
    <Box background="linear-gradient(315deg, #70b2d9 0%, #39e5b6 74%)" color="white">
        <Flex justifyContent="space-between" m="0 20px 0 20px" p="10px" alignItems="center">

            <HStack>
                <Image src={logo} w='55px'/>
                <Box _hover={hoverColor}>
                   <Text fontSize="24px" fontWeight="bold">QRcode</Text>
                   <Text mt="-7px">Gen</Text>
                </Box>
            </HStack>

            <HStack w={{lg:'50%', xl:'40%'}} display={{base:"none",sm:'none', md:'none', lg:'flex', xl:'flex'}} justifyContent="space-between">
                <Text fontSize={{lg:'15px', xl:'17px'}} _hover={hoverColor}>Create URL QRcode</Text>
                <Text fontSize={{lg:'15px', xl:'17px'}} _hover={hoverColor}>Create Text QRcode</Text>
                <Text fontSize={{lg:'15px', xl:'17px'}} _hover={hoverColor}>Scan Qrcode</Text>
                <Box>
                    <Popover autoFocus={false}>
                        <PopoverTrigger>
                            <Image src={person} w="30px"/>
                        </PopoverTrigger>
                        <PopoverContent color='black' p="3px">
                            <PopoverArrow />
                            <PopoverCloseButton color="teal" fontSize="14px" />
                            <PopoverHeader color="teal" mb="3px" borderRadius="5px" fontWeight="bold">{register==='CREATE ACCOUNT' ? register : 'Account'}</PopoverHeader>
                                {
                                  register==='CREATE ACCONT' ?
                                  <PopoverBody>
                                    <Button w="100%" background='teal' color="white">SignIn / SignUp</Button>
                                  </PopoverBody> : 
                                   <PopoverBody textAlign="center">
                                     <Text>Shubham Chaubey</Text>
                                     <Text>888888888</Text>
                                     <Text>schaubey10320@gmail.com</Text>
                                     <Button w="100%" background='teal' color="white" mt="10px">Logout</Button>
                                 </PopoverBody> 
                                }
                            
                        </PopoverContent>
                    </Popover>
                </Box>
            </HStack>
            
            <HamburgerIcon fontSize="23px" display={{base:"block",sm:'block', md:'block', lg:'none', xl:'none'}} />

        </Flex>
    </Box>
  )
}

export default Navbar
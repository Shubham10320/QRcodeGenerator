import React, { useState } from 'react'
import person from '../assets/person.png'
import logo from '../assets/logo.webp'
import {HamburgerIcon} from '@chakra-ui/icons'
import { Box, Flex, HStack, Image,Button, Text, Popover,PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton,  Drawer, DrawerBody, DrawerFooter, DrawerHeader,DrawerContent,DrawerCloseButton, useDisclosure} from '@chakra-ui/react'

const Navbar = () => {
    const [register, setRegister]=useState('CREATE ACCOUNT');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const hoverColor={
        color:'teal',
        textDecoration:"underline",
        cursor:'pointer'
    }
    

  return (
    <Box background="linear-gradient(315deg, #70b2d9 0%, #39e5b6 74%)" color="white" >
        <Flex justifyContent="space-between" m="0 20px 0 20px" p="10px" alignItems="center">

            <HStack _hover={hoverColor}>
                <Image src={logo} w='55px'/>
                <Box>
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
                                    <Button w="100%" background='teal'  _hover={{background:'lightgreen', color:'black'}} color="white">SignIn / SignUp</Button>
                                  </PopoverBody> : 
                                   <PopoverBody textAlign="center">
                                     <Text>Shubham Chaubey</Text>
                                     <Text>888888888</Text>
                                     <Text>schaubey10320@gmail.com</Text>
                                     <Button w="100%"  _hover={{background:'lightgreen', color:'black'}} background='teal' color="white" mt="10px">Logout</Button>
                                 </PopoverBody> 
                                }
                            
                        </PopoverContent>
                    </Popover>
                </Box>
            </HStack>
            
            <HamburgerIcon fontSize="23px" display={{base:"block",sm:'block', md:'block', lg:'none', xl:'none'}} onClick={onOpen} />

            <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                <DrawerContent background="linear-gradient(315deg, #70b2d9 0%, #39e5b6 74%)">
                    <DrawerCloseButton />
                    <DrawerHeader color="white" fontSize="22px" mt="18px">Welcome To QRcode-Gen</DrawerHeader>
                    <DrawerBody color="white" fontSize="20px" textAlign="center" mt="35px">
                        <Text mb="7px" _hover={hoverColor}>Create URL QRcode</Text>
                        <Text mb="7px" _hover={hoverColor}>Create Text QRcode</Text>
                        <Text mb="7px" _hover={hoverColor}>Scan Qrcode</Text>
                        <Text _hover={hoverColor}>Account</Text>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button>Logout</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
  
        </Flex>
    </Box>
  )
}

export default Navbar
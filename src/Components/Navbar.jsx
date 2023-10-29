import React, { useContext, useState } from 'react'
import person from '../assets/person.png'
import logo from '../assets/logo.webp'
import {HamburgerIcon} from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Flex, useToast,HStack, Image,Button, Text, Popover,PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton,  Drawer, DrawerBody, DrawerFooter, DrawerHeader,DrawerContent,DrawerCloseButton, useDisclosure} from '@chakra-ui/react'
import { myContext } from '../Context/AuthContext'

const Navbar = () => {
    // const [register, setRegister]=useState(false);
    const navigate=useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const{authPersonDetail,setAuth,auth}=useContext(myContext);
    const{name, mobile,email}=authPersonDetail;
    const hoverColor={
        color:'teal',
        textDecoration:"underline",
        cursor:'pointer'
    }
    const toast = useToast();
    const logout=()=>{
        setAuth(false)
        toast({
            title: "Success",
            description: "Account logout!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
    }

  return (
    <Box background="linear-gradient(315deg, #70b2d9 0%, #39e5b6 74%)" color="white" >
        <Flex justifyContent="space-between" m="0 20px 0 20px" p="10px" alignItems="center">

            <HStack _hover={hoverColor}>
               <Link to='/'><Image src={logo} w='55px'/></Link>
               <Link to='/'>
                <Box>
                   <Text fontSize="24px" fontWeight="bold">QRcode</Text>
                   <Text mt="-7px">Gen</Text>
                </Box>
                </Link>
                
            </HStack>

            <HStack w={{lg:'50%', xl:'40%'}} display={{base:"none",sm:'none', md:'none', lg:'flex', xl:'flex'}} justifyContent="space-between">
               <Link to="/urlqr"><Text fontSize={{lg:'15px', xl:'17px'}} _hover={hoverColor}>Create URL QRcode</Text></Link> 
               <Link to="/textqr"><Text fontSize={{lg:'15px', xl:'17px'}} _hover={hoverColor}>Create Text QRcode</Text></Link> 
               <Link to="/scanqr"><Text fontSize={{lg:'15px', xl:'17px'}} _hover={hoverColor}>Scan Qrcode</Text></Link> 
                <Box>
                    <Popover autoFocus={false}>
                        <PopoverTrigger>
                            <Image src={person} w="30px"/>
                        </PopoverTrigger>
                        <PopoverContent color='black' p="3px">
                            <PopoverArrow />
                            <PopoverCloseButton color="teal" fontSize="14px" />
                            <PopoverHeader color="teal" mb="3px" borderRadius="5px" fontWeight="bold">{auth==false ? 'CREATE ACCOUNT' : 'Account'}</PopoverHeader>
                                {
                                  auth==false ?
                                  <PopoverBody>
                                    <Button onClick={()=>navigate('/signup')} w="100%" background='teal'  _hover={{background:'lightgreen', color:'black'}} color="white">SignIn / SignUp</Button>
                                  </PopoverBody> : 
                                   <PopoverBody textAlign="center">
                                     <Text fontWeight="bold">{name}</Text>
                                     <Text fontWeight="bold">{mobile}</Text>
                                     <Text fontWeight="bold">{email}</Text>
                                     <Button w="100%"  _hover={{background:'lightgreen', color:'black'}} background='teal' color="white" mt="10px" onClick={logout}>Logout</Button>
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
                        <Link to="/urlqr"><Text mb="7px" _hover={hoverColor}>Create URL QRcode</Text></Link>
                        <Link to="/textqr"><Text mb="7px" _hover={hoverColor}>Create Text QRcode</Text></Link>
                        <Link to="/scanqr"><Text mb="7px" _hover={hoverColor}>Scan Qrcode</Text></Link>
                        <Link to="/signup"><Text _hover={hoverColor}>Account</Text></Link>
                    </DrawerBody>
                    <DrawerFooter>
                        {
                            auth? <Button onClick={logout}>Logout</Button> : ''
                        }
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
  
        </Flex>
    </Box>
  )
}

export default Navbar
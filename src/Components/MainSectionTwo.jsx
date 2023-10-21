import React from 'react'
import {Box, Button, Center, Heading,} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const MainSectionTwo = () => {
  const navigate=useNavigate();
  
  return (
    <Box background="linear-gradient(315deg, #70b2d9 0%, #39e5b6 74%)" mt="20px" p="50px">
        <Heading textAlign="center" color="white" as="h1"fontSize={{base:"30px", sm:"35px", md:'40px', lg:"45px", xl:"50px"}} fontWeight="bold">Ready to use the free QR code maker?</Heading>
        <Center>
            <Button onClick={()=>navigate('/textqr')} mt={{base:"10px", sm:"12px", md:'15px', lg:"20px", xl:"60px"}} background="white" color="black" p="25px" borderRadius="30px" _hover={{background:'lightgreen', color:'black'}}>Create your QR code now</Button>
        </Center>
    </Box>
  )
}

export default MainSectionTwo
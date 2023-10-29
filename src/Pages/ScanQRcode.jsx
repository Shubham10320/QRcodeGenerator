import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'

const ScanQRcode = () => {
  return (
    <Box>
      <Flex alignItems={'center'} m="auto" h="100vh">
      <Heading m="auto" as="h1" fontSize={{base:"30px", sm:"33px", md:"38px", lg:"42px", xl:"50px"}} color="teal">Under Process...</Heading>
    </Flex>
    </Box>
  )
}

export default ScanQRcode
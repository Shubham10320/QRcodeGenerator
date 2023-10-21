import React from 'react'
import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import lock from '../assets/lock.png'
import Navbar from '../Components/Navbar'
import { ViewIcon , ViewOffIcon, SpinnerIcon, ArrowForwardIcon, PhoneIcon, LockIcon} from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()


  return (
    <>
    <Navbar/>
    <Box w={{base:"90%",sm:"70%" ,md:"40%",lg:"30%",xl:"30%"}} m="auto" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" mt="50px" p="30px">

       <Flex w={{base:"50%",sm:"50%" ,md:"50%",lg:"50%",xl:"32%"}} m="auto" alignItems="center" justifyContent="center" gap="10px" border="2px solid teal" p="5px" borderRadius="30px">
        <LockIcon fontSize="25px" color="teal"/>
        <Text color="teal" fontWeight="bold" fontSize="20px">Sign Up</Text>
       </Flex>

       <form>
          <Input type="text" mt="50px" mb="15px"  placeholder='Email Address' variant='flushed'/>
          <InputGroup mb="30px">
            <Input type="text"  placeholder='Password' variant='flushed'/>
            <InputRightElement>
              <ViewIcon fontSize="25px" color="teal"/>
            </InputRightElement>
          </InputGroup>
          <Button w="100%" mt="20px" leftIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>Login</Button>
        </form>       


    </Box>
    </>
    
  )
}

export default Login
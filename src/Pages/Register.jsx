import React from 'react'
import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import men from '../assets/men.png'
import Navbar from '../Components/Navbar'
import { ViewIcon , ViewOffIcon, SpinnerIcon, ArrowForwardIcon, PhoneIcon} from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate()


  return (
    <>
    <Navbar/>
    <Box  w={{base:"90%",sm:"70%" ,md:"45%",lg:"38%",xl:"30%"}}  m="auto" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" mt="50px" p="30px">

       <Flex w={{base:"67%",sm:"50%" ,md:"50%",lg:"60%",xl:"35%"}} m="auto" alignItems="center" justifyContent="center" gap="10px" border="2px solid teal" p="5px" borderRadius="30px">
        <Image src={men} w="35px"/>
        <Text color="teal" fontWeight="bold" fontSize="20px">Sign Up</Text>
       </Flex>

       <form>
          <Input type="text" mt="20px" mb="15px"  placeholder='Username' variant='flushed'/>
          <InputGroup mb="30px">
            <Input type="text"  placeholder='Mobile Number' variant='flushed'/>
            <InputRightElement>
              <PhoneIcon fontSize="20px" color="teal"/>
            </InputRightElement>
          </InputGroup>
          <Input type="text" mb="15px"  placeholder='Email Address' variant='flushed'/>
          <InputGroup mb="30px">
            <Input type="text"  placeholder='Password' variant='flushed'/>
            <InputRightElement>
              <ViewIcon fontSize="25px" color="teal"/>
            </InputRightElement>
          </InputGroup>
          <Button w="100%" leftIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>Register</Button>
          <Text>Forgot Password?</Text>
          <Text>Do you have an account ? <Link to="/login"><span style={{color:"red"}}>Sign In</span></Link></Text>
        </form>       


    </Box>
    </>
    
  )
}

export default Register
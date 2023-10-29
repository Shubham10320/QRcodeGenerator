import React, { useState } from 'react'
import { Box,useToast, Button, Flex, Heading, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import men from '../assets/men.png'
import Navbar from '../Components/Navbar'
import { ViewIcon , ViewOffIcon, SpinnerIcon, ArrowForwardIcon, PhoneIcon} from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {
  const navigate=useNavigate();
  const toast = useToast();
  const [userDetails, setUserDetails]=useState({name:'', password:"", email:"", mobile:""});

  const storeDetails=(e)=>{
      setUserDetails({...userDetails, [e.target.name]:e.target.value})
  }
  const {name, password, email, mobile}=userDetails
  const uploadUserDetails=(e)=>{
    e.preventDefault();
    console.log(userDetails)
    axios.post(`https://qrgen-6ih9.onrender.com/signup`, userDetails)
    .then((res)=>{
      toast({
        title: "Success",
        description: "You Registered Successfully!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate('/login')
    })
    .catch((err)=>console.log(err))
  }
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
    <Box  w={{base:"90%",sm:"70%" ,md:"45%",lg:"38%",xl:"30%"}}  m="auto" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" mt="50px" p="30px">

       <Flex w={{base:"67%",sm:"50%" ,md:"50%",lg:"60%",xl:"35%"}} m="auto" alignItems="center" justifyContent="center" gap="10px" border="2px solid teal" p="5px" borderRadius="30px">
        <Image src={men} w="35px"/>
        <Text color="teal" fontWeight="bold" fontSize="20px">Sign Up</Text>
       </Flex>

       <form onSubmit={uploadUserDetails}>
          <Input type="text" value={name} name="name"  mt="20px" mb="15px"  placeholder='Username' variant='flushed' onChange={storeDetails}/>

          <InputGroup mb="30px">
            <Input type="tel" value={mobile} name="mobile" placeholder='Mobile Number' variant='flushed' onChange={storeDetails}/>
            <InputRightElement>
              <PhoneIcon fontSize="20px" color="teal"/>
            </InputRightElement>
          </InputGroup>


          <Input type="email" value={email} name="email" mb="15px"  placeholder='Email Address' variant='flushed' onChange={storeDetails}/>


          <InputGroup mb="30px">
            <Input type={show ? 'text' : 'password'} value={password} name="password"  placeholder='Password' variant='flushed' onChange={storeDetails}/>
            <InputRightElement>
              <ViewIcon onClick={handleClick} fontSize="25px" color="teal"/>
            </InputRightElement>
          </InputGroup>


          <Button type='submit' w="100%" leftIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>Register</Button>


          <Text>Forgot Password?</Text>
          <Text>Do you have an account ? <Link to="/login"><span style={{color:"red"}}>Sign In</span></Link></Text>
        </form>       


    </Box>
    </>
    
  )
}

export default Register
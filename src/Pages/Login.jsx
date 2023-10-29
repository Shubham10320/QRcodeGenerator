import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  useToast,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import lock from "../assets/lock.png";
import Navbar from "../Components/Navbar";
import {
  ViewIcon,
  ViewOffIcon,
  SpinnerIcon,
  ArrowForwardIcon,
  PhoneIcon,
  LockIcon,
} from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { myContext } from "../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ password: "", email: "" });
  const { password, email } = userDetails;
  const {loggin, setAuth, setAuthPersonDetail}=useContext(myContext)

  const storeDetails = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const toast = useToast();
  const uploadUserData = (e) => {
    e.preventDefault();
    console.log(email, password)
    axios
      .post(`https://qrgen-6ih9.onrender.com/login`, userDetails)
      .then((res) =>{
         console.log(res.data.user);
         const{email, name, mobile}=res.data.user;
         setAuthPersonDetail({email,name, mobile});
         loggin();
         toast({
          title: "Success",
          description: "You logged In!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
         navigate('/')
      })
      .catch((err) => console.log(err));
  };

  const [show, setShow] =useState(false)
  const handleClick = () => setShow(!show)


  return (
    <>
      <Box
        w={{ base: "90%", sm: "70%", md: "40%", lg: "30%", xl: "30%" }}
        m="auto"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        mt="50px"
        p="30px"
      >
        <Flex
          w={{ base: "50%", sm: "50%", md: "50%", lg: "50%", xl: "32%" }}
          m="auto"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          border="2px solid teal"
          p="5px"
          borderRadius="30px"
        >
          <LockIcon fontSize="25px" color="teal" />
          <Text color="teal" fontWeight="bold" fontSize="20px">
            Sign Up
          </Text>
        </Flex>

        <form onSubmit={uploadUserData}>
          <Input
            type="text"
            mt="50px"
            mb="15px"
            name="email"
            value={email}
            placeholder="Email Address"
            variant="flushed"
            onChange={storeDetails}
          />
          <InputGroup mb="30px">
            <Input
              type={show ? 'text' : 'password'}
              name="password"
              value={password}
              placeholder="Password"
              variant="flushed"
              onChange={storeDetails}
            />
            <InputRightElement>
              <ViewIcon onClick={handleClick} fontSize="25px" color="teal" />
            </InputRightElement>
          </InputGroup>
          <Button
            w="100%"
            mt="20px"
            leftIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="solid"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Login;

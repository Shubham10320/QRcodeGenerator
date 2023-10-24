import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
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

  const uploadUserData = (e) => {
    e.preventDefault();
    console.log(email, password)
    axios
      .post(`http://localhost:8080/login`, userDetails)
      .then((res) =>{
         console.log(res.data)
         setAuthPersonDetail(email, password);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
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
              type="text"
              name="password"
              value={password}
              placeholder="Password"
              variant="flushed"
              onChange={storeDetails}
            />
            <InputRightElement>
              <ViewIcon fontSize="25px" color="teal" />
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

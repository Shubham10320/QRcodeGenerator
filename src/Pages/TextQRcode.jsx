import { Box, Button, Flex, Input,Image, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import logo from '../assets/logo.webp'
const TextQRcode = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState();

  const uploadUserDetails = (e) => {
    e.preventDefault();
    console.log(url);
  };

  return (
    <>
      <Navbar />
        <Box
          w={{ base: "90%", sm: "70%", md: "45%", lg: "38%", xl: "30%" }}
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          mt="50px"
          p="30px"
        >
          <form onSubmit={uploadUserDetails}>
            <Text
              fontSize="30px"
              bgGradient="linear(315deg, #70b2d9 0%, #39e5b6 74%)"
              bgClip="text"
              fontWeight="bold"
              textAlign="center"
            >
              Create QRcode
            </Text>

            <Input
              type="text"
              value={text}
              name="url"
              mt="20px"
              mb="15px"
              placeholder="Enter URL"
              variant="flushed"
              onChange={(e) => setText(e.target.value)}
            />

            <Select
              value={size}
              variant="flushed"
              m="15px 0 30px 0"
              placeholder="Choose size for QRcode"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value=""></option>
              <option value="100">100*100</option>
              <option value="200">200*200</option>
              <option value="300">300*300</option>
              <option value="400">400*400</option>
              <option value="500">500*500</option>
            </Select>

            <Button type="submit" w="100%" colorScheme="teal" variant="solid">
              Submit
            </Button>
          </form>
        </Box>
    </>
  );
};

export default TextQRcode;

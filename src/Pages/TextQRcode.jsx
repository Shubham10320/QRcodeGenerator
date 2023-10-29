import {
  Box,
  Button,
  Flex,
  Input,
  Image,
  Select,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
  Center,
  Textarea,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import logo from "../assets/logo.webp";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";

const TextQRcode = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(300);
  const [show, setShow] = useState(false);
  const toast = useToast();
  const qrCodeRef = useRef(null);
  const [present, setPresent]=useState(false)

  const uploadUserDetails = (e) => {
    e.preventDefault();
    if (!text) {
      setPresent(true)
      setTimeout(()=>{
        setPresent(false)
      },3000)
    }else{
      setShow(true);
      toast({
        title: "Success",
        description: "Your QRcode created successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const downloadQRCode = () => {
    html2canvas(qrCodeRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = canvas.toDataURL();
      link.click();
    });
    toast({
      title: "Success",
      description: "Your QRcode downloaded successfully!",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  return (
    <>
      {
            present ? <Alert status="error" m="auto" mt="20px"  w={{ base: "90%", sm: "70%", md: "30%", lg: "20%", xl: "20%" }}>
            <AlertIcon />
            <AlertDescription>
              Please fill all the details.
            </AlertDescription>
          </Alert> : ''
          }
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
         
          <Textarea
            type="url"
            value={text}
            name="url"
            mt="20px"
            mb="15px"
            placeholder="Enter content"
            onChange={(e) => setText(e.target.value)}
          />

          <Select
            variant="flushed"
            m="15px 0 30px 0"
            placeholder="Choose size for QRcode"
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="100">100*100</option>
            <option value="200">200*200</option>
            <option value="300">300*300</option>
          </Select>

          <Button type="submit" w="100%" colorScheme="teal" variant="solid">
            Submit
          </Button>
        </form>
      </Box>
      {show ? (
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          w="50%"
          m="auto"
          mt="30px"
          ref={qrCodeRef}
        >
          <QRCode value={text} size={size} />
        </Box>
      ) : null}
      {show ? (
        <Center>
          <Button colorScheme="red" mt="50px" onClick={downloadQRCode}>
            Download
          </Button>
        </Center>
      ) : null}
    </>
  );
};

export default TextQRcode;

import { Box, Heading, Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import MainSection from '../Components/MainSection';
import MainSectionTwo from '../Components/MainSectionTwo';
import Footer from '../Components/Footer';

const Home = () => {
    const[user, setUser]=useState('Register');

  return (
    <Box>
       <HeroSection/>
       <MainSection/>
       <MainSectionTwo/>
       <Text bgGradient="linear(315deg, #70b2d9 0%, #39e5b6 74%)"  bgClip='text' textAlign="center"  fontSize={{base:"30px", sm:"35px", md:'40px', lg:"45px", xl:"50px"}} fontWeight="bold" mt="20px">Discover my more projects!</Text>
       <Footer/>
    </Box>
  )
}

export default Home
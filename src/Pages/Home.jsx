import { Box, Heading} from '@chakra-ui/react'
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
       <Navbar/>
       <HeroSection/>
       <MainSection/>
       <MainSectionTwo/>
       <Heading textAlign="center" color="black" as="h1"fontSize={{base:"30px", sm:"35px", md:'40px', lg:"45px", xl:"50px"}} fontWeight="bold" mt="20px">Discover my more projects!</Heading>
       <Footer/>
    </Box>
  )
}

export default Home
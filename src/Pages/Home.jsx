import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';

const Home = () => {
    const[user, setUser]=useState('Register');

  return (
    <Box>
       <Navbar/>
       <HeroSection/>
    </Box>
  )
}

export default Home
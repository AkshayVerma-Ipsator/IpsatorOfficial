import { Heading } from '@chakra-ui/react';
import React from 'react';
import Hero from './hero';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Technology from './Technology';

const Page1 = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Hero/>
    <Technology/>
    </>
  );
}

export default Page1;

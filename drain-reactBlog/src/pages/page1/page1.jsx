import { Heading } from '@chakra-ui/react';
import React from 'react';
import Hero from './hero';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Technology from './Technology';
import DropDown from '../../components/Dropdown';

const Page1 = () => {
  return (
    <>
    <Hero/>
    <Technology/>
    <DropDown/>
    </>
  );
}

export default Page1;

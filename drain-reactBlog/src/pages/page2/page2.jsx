import React from "react";
import HeroPage2 from "./hero";
import { Container } from "@chakra-ui/react";
import YTvideos from "../../components/YTvideos";
import Samaroh2 from "../../components/Samaroh";
import Cohort1 from "./Cohort1";
import Cohort2 from "./Cohort2";

const Page2 = () => {
  return (
    <>
      <Cohort1/>
      <HeroPage2 />
      <YTvideos />
      <Samaroh2/>
      <Cohort2/>
    </>
  );
};

export default Page2;

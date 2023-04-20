import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import banner from "../assets/banner2.jpg";
import Slider from "./Slider";

const Banner = () => {
  return (
    <Flex
      backgroundImage={banner}
      minHeight={400}
      align={"center"}
      flexDirection={"column"}
      gap={4}
    >
      <Flex
        justify={"center"}
        align={"center"}
        flexDirection={"column"}
        gap={2}
        padding={"2rem"}
      >
        <Text color={"white"} fontWeight={"bold"} fontSize={"4rem"}>
          Coin Tracker
        </Text>
        <Text color={"white"} fontSize={"large"}>
          Get All The Info Regarding Your Favorite Crypto Currency
        </Text>
      </Flex>
      <Slider />
    </Flex>
  );
};

export default Banner;

import { Flex, Select, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CoinContext } from "../context/CoinProvider";
import Link from "next/link";

const Header = () => {
  const { setCurrency } = useContext(CoinContext);
  return (
    <Flex
      position={"fixed"}
      justify={"space-between"}
      align={"center"}
      padding={"1rem 6rem"}
      bg="#14161a"
      width={"100%"}
      zIndex={4}
    >
      <Link href={"/"}>
        <Text
          fontWeight={"bold"}
          fontSize={"xl"}
          color={"gold"}
          cursor={"pointer"}
        >
          Crypto Tracker
        </Text>
      </Link>

      <Select
        variant="outline"
        placeholder="USD"
        color={"gold"}
        width={"40"}
        outline={"gold"}
        cursor={"pointer"}
        onChange={(e) => {
          setCurrency(e.target.value);
        }}
      >
        <option value="USD" bg="red.500">
          USD
        </option>
        <option value="INR">INR</option>
      </Select>
    </Flex>
  );
};

export default Header;

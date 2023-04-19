import { Flex, Select, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CoinContext } from "../context/CoinProvider";

const Header = () => {
  const { currency, setCurrency, setSymbol } = useContext(CoinContext);
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      padding={"1rem 6rem"}
      bg="#14161a"
    >
      <Text
        fontWeight={"bold"}
        fontSize={"xl"}
        color={"gold"}
        cursor={"pointer"}
      >
        Crypto Tracker
      </Text>

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

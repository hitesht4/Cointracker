import { Card, Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CoinContext } from "../context/CoinProvider";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Trending = ({ coin }) => {
  let profit = coin?.price_change_percentage_24h >= 0;
  const { symbol } = useContext(CoinContext);

  return (
    <Card bg={"transparent"}>
      <Flex
        spacing="4"
        justify={"center"}
        flexDirection={"column"}
        align={"center"}
      >
        <Image width={"5rem"} height={"5rem"} src={coin.image} />
        <Flex flexDirection={"column"} align={"center"}>
          <Flex padding={2} gap={2} align={"center"}>
            <Text color={"white"} textTransform={"uppercase"}>
              {coin.symbol}
            </Text>
            <Text
              color={"white"}
              style={{ color: profit > 0 ? "green" : "red" }}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </Text>
          </Flex>
          <Text color={"white"}>
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Trending;

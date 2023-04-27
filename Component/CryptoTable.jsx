import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Heading,
  Avatar,
  Flex,
  Text,
} from "@chakra-ui/react";
import { CoinContext } from "../context/CoinProvider";
import axios from "axios";
import { CoinList } from "../configs/api";
import Link from "next/link";

const thead = ["Coin", "Price", "24h Change", "Marketcap"];

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CryptoTable = () => {
  const [coins, setCoins] = useState([]);
  const { currency, symbol, page } = useContext(CoinContext);

  const getData = async () => {
    let { data } = await axios.get(CoinList(currency));
    console.log(data[0]);
    setCoins(data);
  };

  useEffect(() => {
    getData();
  }, [currency, symbol]);

  return (
    <Box
      bg="transparent"
      w="95%"
      margin={"3rem auto"}
      p={4}
      color="white"
      fontFamily={"Montserrat"}
    >
      <TableContainer>
        <Table variant="simple">
          <Thead bg={"gold"} padding={"12px"}>
            <Tr textAlign={"center"}>
              {thead.map((item, index) => {
                return (
                  <Th key={index} color={"blackAlpha.900"} fontSize={"1rem"}>
                    {item}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody className="tr">
            {coins
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((item, index) => {
                let profit = item?.price_change_percentage_24h >= 0;
                return (
                  <Tr key={index} textAlign={"center"}>
                    <Td className="tr">
                      <Link href={`coin/${item.id}`}>
                        <Flex
                          flex="1"
                          gap="4"
                          alignItems="center"
                          flexWrap="wrap"
                        >
                          <Avatar src={item.image} />

                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={2}
                          >
                            <Heading size="sm" textTransform={"uppercase"}>
                              {item.symbol}
                            </Heading>
                            <Text textTransform={"capitalize"}>{item.id}</Text>
                          </Box>
                        </Flex>
                      </Link>
                    </Td>
                    <Td>
                      <Link href={`coin/${item.id}`}>
                        {symbol}{" "}
                        {numberWithCommas(item?.current_price.toFixed(2))}
                      </Link>
                    </Td>
                    <Td style={{ color: profit > 0 ? "green" : "red" }}>
                      <Link href={`coin/${item.id}`}>
                        {profit && "+"}
                        {item?.price_change_percentage_24h?.toFixed(2)}%
                      </Link>
                    </Td>
                    <Td>
                      <Link href={`coin/${item.id}`}>
                        {symbol} {numberWithCommas(item?.market_cap.toFixed(2))}
                      </Link>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CryptoTable;

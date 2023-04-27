import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinProvider";
import { SingleCoin } from "../../configs/api";
import axios from "axios";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Graph from "../../Component/Graph";
import { useRouter } from "next/router";
import Header from "@/Component/Header";
import { Spinner } from "@chakra-ui/react";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Coin = () => {
  let { id } = useRouter().query;
  const [coindata, setCoindata] = useState({});
  const { currency, symbol } = useContext(CoinContext);

  const getData = async () => {
    let { data } = await axios.get(SingleCoin(id));
    setCoindata({ ...data });
    console.log(coindata);
  };

  useEffect(() => {
    if (id !== undefined) {
      console.log("request was made");
      getData();
    }
  }, [currency, symbol, id]);

  if (!id) {
    return <Spinner color="gold" />;
  } else {
    return (
      <>
        <Header />
        {coindata.name && (
          <Flex
            width={"95%"}
            margin={"auto"}
            color={"white"}
            minHeight={"calc(100vh)"}
            paddingTop={"5rem"}
          >
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              padding={4}
              width={"33%"}
              gap={5}
            >
              <Box justifyContent={"center"} alignItems={"center"}>
                <Image
                  src={coindata.image.large}
                  display={"block"}
                  width={"200px"}
                  height={"200px"}
                />
              </Box>
              <Box
                flex={1}
                textAlign={"justify"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                padding={"1rem"}
                gap={2}
              >
                <Text fontSize={"4xl"} fontWeight={"bold"} color={"gold"}>
                  {coindata.name}
                </Text>
                <Text fontSize={"large"} padding={"2rem 0"}>
                  {coindata.description.en.split(".")[0]}
                </Text>

                <Flex
                  justify={"flex-start"}
                  width={"full"}
                  alignItems={"center"}
                  gap={4}
                >
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    Rank:
                  </Text>
                  <Text color={"gold"} fontSize={"3xl"} fontWeight={"bold"}>
                    {coindata.market_cap_rank}
                  </Text>
                </Flex>
                <Flex
                  justify={"flex-start"}
                  width={"full"}
                  alignItems={"center"}
                  gap={4}
                >
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    Current Price:
                  </Text>
                  <Text color={"gold"} fontSize={"3xl"} fontWeight={"bold"}>
                    {symbol}{" "}
                    {numberWithCommas(
                      coindata?.market_data.current_price[
                        currency.toLowerCase()
                      ].toFixed(2)
                    )}
                  </Text>
                </Flex>
                <Flex
                  justify={"flex-start"}
                  width={"full"}
                  alignItems={"center"}
                  gap={4}
                >
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    Market Cap:
                  </Text>
                  <Text color={"gold"} fontSize={"3xl"} fontWeight={"bold"}>
                    {symbol}{" "}
                    {numberWithCommas(
                      coindata?.market_data.market_cap[currency.toLowerCase()]
                        .toString()
                        .slice(0, -6)
                    )}
                    M
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Graph params={id} />
          </Flex>
        )}
      </>
    );
  }
};

export default Coin;

import { Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CoinContext } from "../context/CoinProvider";

const Paginate = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [active, setActive] = useState(0);
  const { page, setPage } = useContext(CoinContext);

  const handleClick = (index) => {
    setActive(index);
    setPage(index + 1);
  };
  return (
    <Flex
      color={"gold"}
      width={"90%"}
      margin={"auto"}
      justify={"center"}
      align={"center"}
      padding={"4rem 1rem"}
      gap={2}
    >
      {numbers.map((item, index) => {
        return (
          <Flex
            key={item}
            align={"center"}
            justify="center"
            border={"2px"}
            height={"2.5rem"}
            width={"2.5rem"}
            cursor={"pointer"}
            _hover={{
              bg: "gold",
              color: "black",
              border: "transparent",
              fontWeight: "bold",
            }}
            className={index === active && "active"}
            onClick={() => handleClick(index)}
          >
            {item}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Paginate;

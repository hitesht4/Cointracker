import React, { useContext, useEffect, useRef, useState } from "react";
import { CoinContext } from "../context/CoinProvider";
import axios from "axios";
import { HistoricalChart } from "../configs/api";
import { Spinner } from "@chakra-ui/react";
import { chartDays } from "@/configs/data";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const Graph = ({ params }) => {
  const [coindata, setCoindata] = useState([]);
  const [days, setDays] = useState(1);
  const [selected, setSelected] = useState(0);
  const { currency, symbol } = useContext(CoinContext);

  const getData = async () => {
    let { data } = await axios.get(HistoricalChart(params, days, currency));
    setCoindata(data.prices);
  };

  useEffect(() => {
    getData();
  }, [days, currency, symbol]);

  return (
    <div>
      {coindata.length !== 0 && (
        <Flex
          width={"100%"}
          justify="center"
          align="center"
          height="70vh"
          paddingLeft="3rem"
          direction="column"
          gap={6}
        >
          <Line
            style={{ width: "50vw" }}
            data={{
              labels: coindata.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: coindata.map((coin) => coin[1]),
                  label: `Price (Past ${days} Days) in ${currency}`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
          />
          <Flex gap="4">
            {chartDays.map((item, index) => {
              return (
                <Button
                  key={index}
                  border="2px solid gold"
                  background="transparent"
                  fontWeight="bold"
                  _hover={{
                    background: "gold",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    setDays(item.value);
                    setSelected(index);
                  }}
                  className={index === selected && "active"}
                >
                  {item.label}
                </Button>
              );
            })}
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default Graph;

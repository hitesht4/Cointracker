import React, { useContext, useEffect, useRef, useState } from "react";
import { CoinContext } from "../context/CoinProvider";
import axios from "axios";
import { HistoricalChart } from "../configs/api";
import { Spinner } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";

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
  const { currency, symbol } = useContext(CoinContext);
  const ref = useRef();

  const getData = async () => {
    let { data } = await axios.get(HistoricalChart(params, days, currency));
    setCoindata(data.prices);
  };

  useEffect(() => {
    getData();
  }, [days, currency]);

  return (
    <div>
      {coindata.length !== 0 && (
        <div>
          <Line
            data={{
              labels: coindata.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours - 12}:${date.getMinutes()}PM`
                    : `${date.getHours}:${date.getMinutes()}AM`;

                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: coindata.map((coin) => coin[1]),
                  label: `Price (Past ${days} Days) in ${currency}`,
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Graph;

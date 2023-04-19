import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { getTrending } from "../configs/api";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import Trending from "./Trending";
import { CoinContext } from "../context/CoinProvider";

export default function Slider() {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = useContext(CoinContext);

  const getData = async () => {
    let { data } = await axios.get(getTrending(currency));
    setTrending(data);
  };

  useEffect(() => {
    getData();
  }, [currency, symbol]);

  const responsive = {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  };

  const items = trending.map((coin) => (
    <Link>
      <Trending coin={coin} />
    </Link>
  ));

  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      responsive={responsive}
      autoPlay
      items={items}
    />
  );
}

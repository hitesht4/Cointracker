import React from "react";
import Banner from "../Component/Banner";
import CryptoTable from "../Component/CryptoTable";
import Paginate from "../Component/Paginate";

const Home = () => {
  return (
    <div>
      <Banner />
      <CryptoTable />
      <Paginate />
    </div>
  );
};

export default Home;

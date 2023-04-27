import React, { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (currency === "USD") {
      setSymbol("$");
    } else {
      setSymbol("₹");
    }
  }, [currency]);

  return (
    <CoinContext.Provider
      value={{ symbol, setSymbol, currency, setCurrency, page, setPage }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export default CoinProvider;

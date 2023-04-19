import React, { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency === "USD") {
      setSymbol("$");
    } else {
      setSymbol("₹");
    }
  }, [currency]);

  return (
    <CoinContext.Provider value={{ symbol, setSymbol, currency, setCurrency }}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinProvider;

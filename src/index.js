import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "react-alice-carousel/lib/alice-carousel.css";
import CoinProvider from "./context/CoinProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <CoinProvider>
          <App />
        </CoinProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

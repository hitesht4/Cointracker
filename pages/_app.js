import CoinProvider from "@/context/CoinProvider";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CoinProvider>
        <Component {...pageProps} />
      </CoinProvider>
    </ChakraProvider>
  );
}

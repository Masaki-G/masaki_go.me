import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// const breakpoints = {
//   sm: "320px",
//   md: "768px",
//   lg: "960px",
//   xl: "1200px",
//   "2xl": "1536px",
// };
// const theme = extendTheme({ breakpoints });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />{" "}
    </ChakraProvider>
  );
}

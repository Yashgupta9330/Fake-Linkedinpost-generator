import "@/styles/globals.css";
import type { AppProps } from "next/app";

import ImageProvider from "@/components/ImageProvider";
import { chirpFont } from "@/utils/font";
import { theme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={chirpFont.className}>
        <ImageProvider>
          <Component {...pageProps} />
        </ImageProvider>
      </main>
    </ChakraProvider>
  );
}

import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react'
import { FavoritesContextProvider } from "../store/favorites-conrext";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next JS Meet Up</title>
      </Head>

      {/* Main App */}
      <ChakraProvider>
        <FavoritesContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FavoritesContextProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

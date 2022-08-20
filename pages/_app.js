import "../styles/globals.css";
import { Fragment } from "react";
import Nav from "../components/layout/header/Nav";
import Footer from "../components/layout/footer/Footer";
import Image from "next/image";
import Head from "next/head";

import {CountDownTimerProvider }from "../context/CountDownTimerContext"

import {Toaster} from "react-hot-toast"
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const getLibrary = (provider) => {
  return new Web3Provider(provider);

};

function MyApp({ Component, pageProps }) {
  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <CountDownTimerProvider>
        <Fragment>
          
          <Toaster/>
          {Component.name !== "Home" && (<Nav></Nav>)}
          
          <Component {...pageProps} />
          <Footer></Footer>
        </Fragment>
      </CountDownTimerProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;

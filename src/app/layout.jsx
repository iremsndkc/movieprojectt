import React from "react";
import "../styles/globals.css";
import Providers from "./Providers";
import Head from "./head";
import Header from "../components/Header";
import Tabs from "../components/Tabs";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head />
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
}

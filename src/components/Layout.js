import React from "react";
import { Helmet } from "react-helmet";
import "./../styles/styles.css";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  return(
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossorigin="anonymous"
      />
    </Helmet>
    <Header />
    <div>{children}</div>
    <Footer />
  </>
)};

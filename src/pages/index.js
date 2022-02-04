import React from "react";
import { Layout } from "../components";
import { Helmet } from "react-helmet"
import {
  Explore,
  Product,
  Services,
  Attention,
  Team,
  News,
} from "../layouts/Home";


export default function Home() {
  return (
    <div>
       <Helmet>
            <meta charSet="utf-8" />
            <title>Home</title>
            </Helmet>
      <Layout>
        <Explore />
        <Services />
        <Team />
        <Attention />
        <News />
        <Product />
      </Layout>
    </div>
  );
}

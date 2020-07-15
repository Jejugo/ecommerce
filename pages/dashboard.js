import React, { Component } from "react";
import Head from 'next/head'
import Navbar from "../app/components/layout/navbar/Navbar";
import Layout from "../app/components/layout/Layout";
import SideNav from "../app/components/side-navbar/SideNav";

export default class dashboard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
        </Head>
        <Layout>
          <SideNav />
        </Layout>
      </section>
    );
  }
}

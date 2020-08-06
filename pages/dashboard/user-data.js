import React, { Component } from "react";
import Head from 'next/head'
import Layout from "../../app/components/layout/Layout";
import SideNav from "../../app/components/side-navbar/SideNav";
import DashContainer from "../../app/components/layout/dash-container/DashContainer";
import PurchaseComponent from "../../app/features/purchase/PurchaseComponent";
import ProtectRoute from "../../app/hoc/ProtectRoute";
import UserDataComponent from "../../app/features/user-data/UserDataComponent";

class Purchase extends Component {
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
          <SideNav selected={"configuration"}/>
          <DashContainer>
            <UserDataComponent />
          </DashContainer>
        </Layout>
      </section>
    );
  }
}

export default ProtectRoute(Purchase)
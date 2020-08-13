import React, { Component } from "react";
import Head from 'next/head'
import Layout from "../../app/components/layout/Layout";
import SideNav from "../../app/components/side-navbar/SideNav";
import DashContainer from "../../app/components/layout/dash-container/DashContainer";
import PurchaseComponent from "../../app/features/purchase/PurchaseComponent";
import ProtectRoute from "../../app/hoc/ProtectRoute";
import HeadComponent from '../../app/components/head/HeadComponent';

class Purchase extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section>
        <HeadComponent></HeadComponent>
        <Layout>
          <SideNav selected={"purchase"}/>
          <DashContainer>
            <PurchaseComponent />
          </DashContainer>
        </Layout>
      </section>
    );
  }
}

export default ProtectRoute(Purchase)
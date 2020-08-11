import React, { Component } from "react";
import Layout from "../../../app/components/layout/Layout";
import SideNav from "../../../app/components/side-navbar/SideNav";
import DashContainer from "../../../app/components/layout/dash-container/DashContainer";
import ProtectRoute from "../../../app/hoc/ProtectRoute";
import UserDataComponent from "../../../app/features/user-data/UserDataComponent";
import HeadComponent from '../../../app/components/head/HeadComponent';
import Error from "../../../app/components/error/Error";

class Purchase extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section>
        <Error></Error>
        <HeadComponent></HeadComponent>
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
import React, { Component } from "react";
import Layout from "../../../app/components/layout/Layout";
import SideNav from "../../../app/components/side-navbar/SideNav";
import DashContainer from "../../../app/components/layout/dash-container/DashContainer";
import ProtectRoute from "../../../app/hoc/ProtectRoute";
import HeadComponent from "../../../app/components/head/HeadComponent";
import UserCardData from "../../../app/features/user-data/user-card-data/UserCardData";

class UserCard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section>
        <HeadComponent></HeadComponent>
        <Layout>
          <SideNav selected={"configuration"}/>
          <DashContainer>
            <UserCardData></UserCardData>
          </DashContainer>
        </Layout>
      </section>
    );
  }
}

export default ProtectRoute(UserCard)
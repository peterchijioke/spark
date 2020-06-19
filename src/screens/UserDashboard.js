import React, { Component } from "react";
import {
  Drawer,
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import * as Font from "expo-font";
// import { AppLoading, Root } from "expo";

import SideBar from "./sub_screen/Side";
import { statusBarColor, stauBarColorDash } from "../screens/sub_screen/Colors";
import BtnScreen from "./UserDashboard_sub_screens/BtnScreen";
import Footer_screen from "./UserDashboard_sub_screens/Footer_screen";
import { Dimensions } from "react-native";

export default class DrawerActivity extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <React.Fragment>
        <Drawer
          ref={(ref) => {
            this.drawer = ref;
          }}
          content={<SideBar navigator={this.navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <Container
            style={{
              backgroundColor: "#f1f1f1",
              height: Dimensions.get("screen").height,
            }}
          >
            <Header
              style={{ backgroundColor: "#f1f1f1" }}
              androidStatusBarColor={statusBarColor}
              iosBarStyle="light-content"
            >
              <Left>
                <Button transparent onPress={this.openDrawer}>
                  <Icon name="menu" style={{ color: "#717171" }} />
                </Button>
              </Left>
              <Body>
                <Title
                  style={{ color: "#b90000", fontSize: 27, fontWeight: "bold" }}
                >
                  Spark
                </Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="camera" />
                </Button>
              </Right>
            </Header>

            {/* <FlatList
            data={[{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }]}
            renderItem={({ item }) => <CardImge />}
          /> */}
            {/* btn Area */}
            <BtnScreen />
          </Container>
          {/* text Area */}
          <Footer_screen />
          {/* <FooterBadge /> */}
        </Drawer>
      </React.Fragment>
    );
  }
}

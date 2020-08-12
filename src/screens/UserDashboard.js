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

import SideBar from "./sub_screen/Side";
import { statusBarColor, stauBarColorDash } from "../screens/sub_screen/Colors";
import BtnScreen from "./UserDashboard_sub_screens/BtnScreen";
import Footer_screen from "./UserDashboard_sub_screens/Footer_screen";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import JwtDecode from "jwt-decode";
// AsyncStorage.getItem("UserDetails");

export default class DrawerActivity extends Component {
  state = { details: "" };
  componentDidMount = async () => {
    try {
      const AcyncUserdetails = await AsyncStorage.getItem("userDetails");
      const result =
        AcyncUserdetails != null ? JSON.parse(AcyncUserdetails) : null;
      console.log(result);
      const details = JwtDecode(result);
      this.setState({ details });
      console.log(details);
    } catch (error) {
      console.log(error.response);
    }
  };
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
          content={
            <SideBar navigator={this.navigator} user={this.state.details} />
          }
          onClose={() => this.closeDrawer()}
        >
          <Container
            style={{
              backgroundColor: "#f1f1f1",
              height: Dimensions.get("screen").height,
            }}
          >
            <Header
              style={{ backgroundColor: "#e92d2d" }}
              // androidStatusBarColor={statusBarColor}
              androidStatusBarColor="#000000"
              iosBarStyle="light-content"
            >
              <Left>
                <Button transparent onPress={this.openDrawer}>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title
                  style={{
                    color: "#fff",
                    fontSize: 27,
                    fontWeight: "bold",
                  }}
                >
                  Dashboard
                </Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="home" />
                </Button>
              </Right>
            </Header>

            {/* <FlatList
            data={[{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }]}
            renderItem={({ item }) => <CardImge />}
          /> */}
            {/* btn Area */}
            <BtnScreen navigation={this.props.navigation} />
          </Container>
          {/* text Area */}
          <Footer_screen />
          {/* <FooterBadge /> */}
        </Drawer>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
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

import { AntDesign } from "react-native-vector-icons";
import { statusBarColor, stauBarColorDash } from "../screens/sub_screen/Colors";
import { observer, inject } from "mobx-react";
// import GirlDrive_Login from "./sub_screen/GirlDrive_Login";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

@inject("store")
@observer
export default class LoginPage extends Component {
  componentDidMount() {
    console.log(this.props.store.userLoginDetails);
  }

  headerFunc = (props) => {
    return (
      <Header
        style={{ backgroundColor: "#e92d2d" }}
        androidStatusBarColor={statusBarColor}
        iosBarStyle="light-content"
      >
        <Left>
          <Button transparent>
            {/* <AntDesign name="leftcircleo" size={24} color="white" /> */}
            <AntDesign name="left" size={24} color="white" />
            {/* <AntDesign name="arrowleft" size={24} color="white" /> */}
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "#fff", fontSize: 22, fontWeight: "600" }}>
            Login
          </Title>
        </Body>
        <Right></Right>
      </Header>
    );
  };

  render() {
    return (
      <React.Fragment>
        <this.headerFunc />

        <View style={styles.container}>
          {/* <GirlDrive_Login /> */}

          <ImageBackground
            source={require("../img/manRun22.png")}
            style={{
              height: Dimensions.get("screen").height,
              // width: Dimensions.get("screen").width,
              opacity: 0.9,
            }}
          ></ImageBackground>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
});

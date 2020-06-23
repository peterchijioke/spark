import React from "react";
import { View, Text } from "react-native";
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
import { statusBarColor, stauBarColorDash } from "../sub_screen/Colors";
import UserDashboard from "../UserDashboard";

const HeaderGlobal = () => {
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
        <Title
          style={{ color: "#fff", fontSize: 22, fontWeight: "600" }}
        ></Title>
      </Body>
      <Right></Right>
    </Header>
  );
};

export default HeaderGlobal;

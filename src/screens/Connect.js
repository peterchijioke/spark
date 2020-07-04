import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Alert,
  StatusBar,
} from "react-native";
import GirlDrive_connect from "./sub_screen/GirlDrive_connect";
import ConnectWithEmailSreen from "./sub_screen/ConnectWithEmailScreen";
// import ConnectWithPhoneScreen from "./sub_screen/ConnectWithPhoneScreen";
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
import { Provider } from "mobx-react";
import store from "../../store";

import { AntDesign } from "react-native-vector-icons";
import { statusBarColor, stauBarColorDash } from "../screens/sub_screen/Colors";

export default class Connect extends Component {
  // state = { emailPage: false, phonePage: false };

  render() {
    return (
      <Provider store={store}>
        {/* {this.headerFuction()} */}
        <StatusBar backgroundColor="#b90000" barStyle="light-content" />
        <View style={Styles.container}>
          <GirlDrive_connect
            ShowEmailScreenFunction={this.FuncHandleEmailPage}
            // ShowPhoneScreenFunction={this.FuncHandlePhonePage}
          />
          {/* {this.sellectPage()} */}
          <ConnectWithEmailSreen />
        </View>
      </Provider>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    height: Dimensions.get("screen").height,
  },
});

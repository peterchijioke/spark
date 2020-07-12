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
import { observer, inject } from "mobx-react";

import { AntDesign } from "react-native-vector-icons";
import { statusBarColor, stauBarColorDash } from "../screens/sub_screen/Colors";
import { Root } from "popup-ui";
@inject("store")
@observer
export default class Connect extends Component {
  // state = { emailPage: false, phonePage: false };
  componentDidMount() {}

  render() {
    // console.log(this.props.navigation);

    return (
      <React.Fragment>
        {/* {this.headerFuction()} */}
        <StatusBar backgroundColor="#b90000" barStyle="light-content" />
        <View style={Styles.container}>
          <GirlDrive_connect
            ShowEmailScreenFunction={this.FuncHandleEmailPage}
            // ShowPhoneScreenFunction={this.FuncHandlePhonePage}
          />
          {/* {this.sellectPage()} */}
          <ConnectWithEmailSreen
            navigationObj={this.props.navigation}
            store={this.props.store}
          />
        </View>
      </React.Fragment>
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

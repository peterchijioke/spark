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
import { observer, inject } from "mobx-react";
import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
@inject("store")
@observer
export default class Connect extends Component {
  // state = { emailPage: false, phonePage: false };
  componentDidMount() {}
  componentWillUnmount = () => {
    source.cancel();
  };

  render() {
    // console.log(this.props.navigation);

    return (
      //   <StatusBar backgroundColor="#b90000" barStyle="light-content" />
      <View style={Styles.container}>
        <StatusBar />
        <GirlDrive_connect
          ShowEmailScreenFunction={this.FuncHandleEmailPage}
          // ShowPhoneScreenFunction={this.FuncHandlePhonePage}
        />
        {/* {this.sellectPage()} */}
        <ConnectWithEmailSreen
          navigationObj={this.props.navigation}
          store={this.props.store}
          navigation={this.props.navigation}
        />
      </View>
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

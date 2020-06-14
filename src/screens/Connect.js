import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, Alert } from "react-native";
import GirlDrive_connect from "./sub_screen/GirlDrive_connect";
import ConnectWithEmailSreen from "./sub_screen/ConnectWithEmailScreen";
import ConnectWithPhoneScreen from "./sub_screen/ConnectWithPhoneScreen";

export default class Connect extends Component {
  state = { emailPage: false, phonePage: false };
  sellectPage = () => {
    if (this.state.emailPage === false) {
      return <ConnectWithPhoneScreen />;
    } else if (this.state.phonePage == false) {
      return <ConnectWithEmailSreen />;
    } else {
      return <ConnectWithPhoneScreen />;
    }
  };

  FuncHandleEmailPage = () => {
    this.setState({ emailPage: true });
    this.setState({ phonePage: false });
    console.log(this.state.emailPage);
  };
  FuncHandlePhonePage = () => {
    this.setState({ phonePage: true });
    this.setState({ emailPage: false });

    console.log(this.state.phonePage);
  };
  render() {
    return (
      <View style={Styles.container}>
        <GirlDrive_connect
          ShowEmailScreenFunction={this.FuncHandleEmailPage}
          ShowPhoneScreenFunction={this.FuncHandlePhonePage}
        />
        {this.sellectPage()}
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

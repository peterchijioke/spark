import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import GirlDrive_Login from "./sub_screen/GirlDrive_Login";
import LoginWithEmailForm from "./sub_screen/LoginWithEmailForm";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <GirlDrive_Login />

      {/* <ImageBackground
        source={require("../img/manRun.png")}
        style={{
          height: Dimensions.get("screen").height,
          width: Dimensions.get("screen").width,
          opacity: 0.9,
        }}
      > */}
      <LoginWithEmailForm />
      {/* </ImageBackground> */}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
});

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const girlDrive_connect = ({}) => {
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;
  return (
    <View style={Styles.container}>
      <View style={{ alignItems: "center" }}>
        <ImageBackground
          source={require("../../img/girlBick.png")}
          style={{ height: HEIGHT - 600, width: WIDTH - 200, marginTop: 10 }}
        ></ImageBackground>
      </View>
    </View>
  );
};

export default girlDrive_connect;

const Styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#f7f7f7",
    width: Dimensions.get("screen").width,
  },
  connectText: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 25,
    fontWeight: "700",
    color: "#b90000",
    fontFamily: "",
  },
  btnView: { flexDirection: "row", margin: 0, backgroundColor: "#123" },
  btnEmail: {
    backgroundColor: "#CE3737",
    width: "50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 10,
    elevation: 10,
  },
  btnPhone: {
    alignItems: "center",
    backgroundColor: "#fff",
    width: "50%",
    height: 50,
    justifyContent: "center",
    // borderRadius: 10,
    elevation: 10,
  },
  btnText: { fontSize: 18, color: "#b90000" },
});

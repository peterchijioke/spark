import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

const GoogleMap = () => {
  return (
    <ImageBackground
      source={require("../../img/mapImage.jpeg")}
      style={{ width: Dimensions.get("screen").width, height: 550 }}
    >
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtInnerBtn}>Confirm</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#fff",
    width: 80,
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    elevation: 5,
    top: "10%",
    // borderWidth: 1,
  },
  txtInnerBtn: {
    color: "#b90000",
    fontSize: 16,
    textAlign: "center",
  },
});

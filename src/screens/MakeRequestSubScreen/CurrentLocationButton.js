import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import * as Location from "expo-location";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class CurrentLocationButton extends Component {
  render() {
    const { st } = this.props;
    // console.log(st);
    const cb = this.props.cb
      ? this.props.cb
      : () =>
          console.log("callback function not passed to currentLocaionButton");
    if (st === true) {
      return (
        <View style={[styles.container, { top: HEIGHT - 280 }]}>
          <MaterialIcons
            name="my-location"
            color="#000000"
            size={25}
            onPress={() => {
              cb();
            }}
          />
        </View>
      );
    } else {
      return (
        <View style={[styles.container, { top: HEIGHT - 280 }]}>
          <MaterialIcons
            name="my-location"
            color="#000000"
            size={25}
            onPress={() => {
              alert("Enable location service through your settings..");
            }}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    position: "absolute",
    width: 45,
    height: 45,
    backgroundColor: "#fff",
    left: WIDTH - 70,
    borderRadius: 50,
    // shadowRadius: ,
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

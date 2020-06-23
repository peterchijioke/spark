import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import HeaderGlobal from "./HeaderGlobal";
import GoogleMap from "../MakeRequestSubScreen/GoogleMap";

const MakeRequestPage = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <HeaderGlobal /> */}
      <StatusBar barStyle="light-content" backgroundColor="#b90000" />
      <View style={styles.container}>
        <View style={styles.mapView}>
          <GoogleMap />
        </View>
        <View style={{ backgroundColor: "#123", width: "100%", height: 100 }}>
          <Text style={{ color: "#b90000", alignSelf: "center", fontSize: 20 }}>
            Which Vehicle suits your need ?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MakeRequestPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    height: Dimensions.get("screen").height,
  },
  mapView: { backgroundColor: "#b90000" },
});

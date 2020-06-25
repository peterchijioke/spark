import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import HeaderGlobal from "./sub_screen/HeaderGlobal";
import GoogleMap from "./MakeRequestSubScreen/GoogleMap";

const MakeRequestPage = () => {
  return (
    <View>
      {/* <HeaderGlobal /> */}
      <StatusBar barStyle="light-content" backgroundColor="#b90000" />
      <View style={styles.container}>
        <GoogleMap />
      </View>
    </View>
  );
};

export default MakeRequestPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    height: 500,
  },
  mapView: { backgroundColor: "#b90000" },
});

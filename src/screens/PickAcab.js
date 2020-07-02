import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
} from "react-native";

import GoogleMap from "./PickACab/GoogleMap";
import WhereTo from "./PickACab/WhereTo";
import SavedPlace from "./PickACab/SavedPlace";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class PickAcab extends Component {
  render() {
    StatusBar.setBarStyle("light-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#b90000");
      StatusBar.setTranslucent(true);
    }
    return (
      <React.Fragment>
        <View>
          <StatusBar />
          <View style={styles.container}>
            <GoogleMap />
          </View>
        </View>
        <View style={styles.WheretoBtn_SavedPlaceView}>
          <WhereTo />
          <SavedPlace />
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    height: 500,
  },
  WheretoBtn_SavedPlaceView: {
    backgroundColor: "#f1f1f1",
    height: HEIGHT - 460,
    marginBottom: 0,
  },
});

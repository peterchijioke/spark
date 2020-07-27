import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
} from "react-native";

import GoogleMap from "./sub_screen/GoogleMap";
import WhereTo from "./PickACab/WhereTo";
import SavedPlace from "./PickACab/SavedPlace";
const { height, width } = Dimensions.get("window");

export default class PickAcab extends Component {
  render() {
    StatusBar.setBarStyle("light-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000");
      StatusBar.setTranslucent(false);
    }
    return (
      <React.Fragment>
        <View>
          <StatusBar />
          <View style={styles.mapView}>
            <GoogleMap />
          </View>
        </View>
        <View style={styles.WheretoBtn_SavedPlaceView}>
          <WhereTo navigation={this.props.navigation} />
          <SavedPlace />
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  mapView: {
    backgroundColor: "#f1f1f1",
    height: height - 225,
  },
  WheretoBtn_SavedPlaceView: {
    backgroundColor: "#f1f1f1",
    height: height - 400,
    marginBottom: 0,
  },
});

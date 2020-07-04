import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default class SavedPlace extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.SavedAreaView}>
          <Text style={styles.txt}>Choose a saved place</Text>
          <View style={[styles.savedPlace, { marginTop: 5 }]}>
            {/* <Icon name="home" style={{ color: "#b90000" }} /> */}

            <Image
              source={require("../../img/home.png")}
              style={styles.fowardArrowImageInner}
            />
            <TouchableOpacity>
              <Text style={[styles.savedPlaceTxt, { marginBottom: 10 }]}>
                Home
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.savedPlace}>
            <Image
              source={require("../../img/portfolio.png")}
              style={styles.fowardArrowImageInner}
            />
            <TouchableOpacity>
              <Text style={styles.savedPlaceTxt}>Office</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <TouchableOpacity style={[styles.SavedAreaView, { marginTop: 20 }]}>
          <Text
            style={[
              styles.txt,
              { fontSize: 16, fontStyle: "italic", fontFamily: "Regular" },
            ]}
          >
            Add a saved place
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexShrink: 1, marginTop: 5 },
  fowardArrowImageInner: {
    width: 20,
    height: 20,
    marginTop: 7,
    // alignSelf: "center",
  },
  schedule: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 35,
    marginLeft: 30,
  },
  txt: {
    fontSize: 20,
    // fontFamily: "bold_italic",
    // marginBottom: 20,
    fontWeight: "700",
    color: "#b90000",
    marginRight: 10,
  },
  SavedAreaView: {
    // marginBottom: 35,
    marginLeft: 30,
    marginTop: 10,
  },
  savedPlace: { flexDirection: "row", flexWrap: "wrap" },
  savedPlaceTxt: {
    marginTop: 5,
    fontSize: 17,
    marginLeft: 10,
    color: "#b90000",
  },
});

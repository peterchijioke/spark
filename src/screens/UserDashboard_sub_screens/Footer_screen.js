import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const Footer_screen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.schedule}>
          <Text style={styles.txt}>Schedule a Trip</Text>
          <Image
            source={require("../../img/RedArrow.png")}
            style={styles.fowardArrowImageInner}
          />
        </View>
      </TouchableOpacity>
      {/* saved Place view */}

      <View style={styles.safeSavedView}>
        <Text style={styles.txt}>Choose a saved place</Text>
        <View style={[styles.savedPlace, { marginTop: 20 }]}>
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
      </View>
      <TouchableOpacity style={[styles.safeSavedView, { marginTop: 30 }]}>
        <Text style={styles.txt}>Add a payment method</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer_screen;
const styles = StyleSheet.create({
  container: { flexShrink: 1, marginBottom: 70 },
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
    // marginBottom: 20,
    fontWeight: "700",
    color: "#b90000",
    marginRight: 10,
  },
  safeSavedView: {
    // marginBottom: 35,
    marginLeft: 30,
  },
  savedPlace: { flexDirection: "row", flexWrap: "wrap" },
  savedPlaceTxt: {
    marginTop: 5,
    fontSize: 17,
    marginLeft: 10,
    color: "#b90000",
  },
});

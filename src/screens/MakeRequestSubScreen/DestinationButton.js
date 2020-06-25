import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

const WIDTH = Dimensions.get("window").width;

export const DestinationButton = ({}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftCol}>
        <Text style={{ fontSize: 8 }}>{"\u25A0"}</Text>
      </View>
      <View style={styles.centerCol}>
        <Text
          style={{
            fontFamily: "sans-serif-thin",
            fontSize: 21,
            color: "#545454",
          }}
        >
          Where to ?
        </Text>
      </View>
      <View style={styles.RightCol}>
        <Ionicons
          name="md-car"
          color="#000000"
          size={25}
          style={{ alignSelf: "center" }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    position: "absolute",
    width: WIDTH - 90,
    flexDirection: "row",
    height: 60,
    top: 110,
    left: 42,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    elevation: 7,
    // shadowColor:'#000000'
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  leftCol: { flex: 1, alignItems: "center" },
  centerCol: { flex: 4 },
  RightCol: { flex: 1, borderLeftWidth: 1, borderColor: "#ededed" },
});

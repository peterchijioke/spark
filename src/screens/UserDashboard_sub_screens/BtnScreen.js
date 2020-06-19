import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const BtnScreen = () => {
  return (
    <View style={styles.btn_view}>
      {/* Delivery btn */}
      <View style={styles.btn_inner}>
        <TouchableOpacity style={[styles.btn]}>
          <View>
            <Image
              source={require("../../img/man1.png")}
              style={{ height: 70, width: 90 }}
            />
            <Text style={styles.btn_text}>Delivery</Text>
            <View style={styles.fowardArrow}>
              <Image
                source={require("../../img/foward.png")}
                style={styles.fowardArrowImageInner}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* Get a ride btn */}
      <View style={styles.btn_inner}>
        <TouchableOpacity style={[styles.btn]}>
          <View>
            <Image
              source={require("../../img/car.png")}
              style={{ height: 70, width: 90 }}
            />
            <Text style={styles.btn_text}>Get a Ride</Text>
            <View style={styles.fowardArrow}>
              <Image
                source={require("../../img/foward.png")}
                style={styles.fowardArrowImageInner}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BtnScreen;

const styles = StyleSheet.create({
  btn_view: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    height: "45%",
    padding: 10,
    flexWrap: "wrap",
    flexGrow: 1,
  },
  btn_inner: {
    width: "50%",
    height: "65%",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#f1f1f1",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  btn_text: {
    color: "#717171",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  fowardArrow: {
    backgroundColor: "#b90000",
    width: 30,
    height: 30,
    // alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center",
  },
  fowardArrowImageInner: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
});

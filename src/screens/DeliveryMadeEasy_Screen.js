import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default class DeliveryMadeEasy_Screen extends Component {
  state = {};
  Loginfunc = () => {};
  Registerfunc = () => {};
  render() {
    return (
      <View style={Styles.container}>
        <View style={{ marginTop: 40 }}>
          <Text style={Styles.sparkTxt}>SPARK</Text>
        </View>
        <View style={{ marginTop: 40, flexDirection: "row" }}>
          <Text style={[Styles.DTxt, { color: "#ef8f8f" }]}>Delivery.</Text>
          <Text style={[Styles.DTxt, { color: "#e92d2d" }]}> Made.</Text>
          <Text style={[Styles.DTxt, { color: "#b90000" }]}>Easy.</Text>
        </View>
        <View style={Styles.imageView}>
          <Image source={require("../img/bg1.png")} style={{}} />
        </View>
        <View style={Styles.btnView}>
          <View style={Styles.loginView}>
            <TouchableOpacity onPress={this.Loginfunc} style={Styles.Btn}>
              <Text style={Styles.btnText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={this.RegisterFunc}
              style={[Styles.Btn, Styles.bg]}
            >
              <View>
                <Text style={[Styles.btnText, Styles.txt]}>SIGNUP</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height,
    backgroundColor: "#f7f7f7",
  },
  sparkTxt: {
    fontSize: 30,
    fontWeight: "400",
    color: "#707070",
  },
  imageView: { flexGrow: 1 },
  btnView: {},
  loginView: { marginBottom: 20 },

  Btn: {
    backgroundColor: "#CE3737",
    width: 300,
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    elevation: 10,
    padding: 5,
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "600",
  },
  bg: { backgroundColor: "#ffffff" },
  txt: { color: "#707070" },
  DTxt: {
    fontSize: 25,
    fontWeight: "700",
    color: "#707070",
    fontStyle: "normal",
  },
});

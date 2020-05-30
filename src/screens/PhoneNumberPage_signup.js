import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import PhoneForm from "./PhoneForm";

export default class PhoneNumberPage_signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexGrow: 1, alignItems: "center" }}>
          <View style={styles.TextStylesForText}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
              Enter phone number
            </Text>
            <Text style={{ fontSize: 16 }}>
              We will send a code to verify your phone number
            </Text>
          </View>
          <View style={styles.TextInpuView}>
            <Text style={styles.countryCode}>+234</Text>
            <TextInput
              style={styles.TextInputPhone}
              placeholder="phone number"
            />
          </View>
        </View>
        <PhoneForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#fff" },
  TextInpuView: {
    marginTop: 10,
    height: 50,
    width: 300,
    borderColor: "#333945",
    borderWidth: 3,
    padding: 15,
    borderRadius: 5,
    padding: 15,
  },
  TextInputPhone: {
    fontSize: 14,
    height: 45,
    width: 200,
    position: "absolute",
    top: 0,
    color: "#000",
    padding: 10,
    right: 0,
    fontSize: 20,
  },

  countryCode: {
    position: "absolute",
    fontSize: 20,
    top: 8,
    fontWeight: "500",
    left: 40,
  },
  TextStylesForText: {
    width: 300,
  },
});

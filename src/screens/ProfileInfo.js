import React, { Component } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ProfileInfo extends Component {
  state = { text: "Enter Text" };
  render() {
    return (
      <View style={styles.component}>
        <View style={{ flexGrow: 1, backgroundColor: "#fff" }}>
          <TextInput
            style={styles.textInput}
            label="Email"
            mode="outlined"
            underlineColorAndroid="#123"
            onChangeText={(text) => this.setState({ text })}
          />
          <Text style={styles.textOnly}>We'll send you your ride recipts</Text>
          <TextInput
            style={styles.textInput}
            label="First Name"
            mode="outlined"
            underlineColorAndroid="#123"
            onChangeText={(text) => this.setState({ text })}
          />
          <TextInput
            style={styles.textInput}
            label="Last Name"
            mode="outlined"
            underlineColorAndroid="#123"
            onChangeText={(text) => this.setState({ text })}
          />
          <Text style={styles.textOnly}>
            Driver will confirm picking up the right person by your first name
          </Text>

          <TextInput
            style={styles.textInput}
            label="Password"
            mode="outlined"
            underlineColorAndroid="#123"
            onChangeText={(text) => this.setState({ text })}
          />

          <TextInput
            style={styles.textInput}
            label="Confirm Password"
            mode="outlined"
            underlineColorAndroid="#123"
            onChangeText={(text) => this.setState({ text })}
          />
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>DONE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: { flex: 1, backgroundColor: "#fff" },
  textInput: {
    marginRight: 18,
    marginLeft: 18,
    marginTop: 5,
  },
  textOnly: {
    fontSize: 18,
    color: "#4C4B4B",
    marginRight: 18,
    marginLeft: 18,
    marginTop: 5,
  },
  btnView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    marginTop: 15,
  },
  btn: {
    backgroundColor: "#333945",
    elevation: 3,
    width: 300,
    height: 55,
    justifyContent: "center",
    borderRadius: 65,
    padding: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

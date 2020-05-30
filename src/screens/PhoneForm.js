import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";

const PhoneForm = () => {
  const componentDidMount = () => {
    // await axios.post("https://localhost:3000", { peter: peter1 });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.ViewInnMain}>
        <TouchableOpacity style={styles.btnGoogle}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              right: 40,
            }}
          >
            <MaterialCommunityIcons
              name="google"
              size={30}
              // color="#FF362E"
              style={styles.googlIcon}
            />
            <Text style={styles.text}>Login with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnfacebook}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              right: 40,
            }}
          >
            <FontAwesome
              name="facebook"
              size={30}
              // color="#FF362E"
              style={styles.facebookIcon}
            />
            <Text style={styles.text}>Login with Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnPhone}>
          <Text style={styles.btnProceed}>PROCEED</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PhoneForm;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  btnPhone: {
    backgroundColor: "#333945",
    width: 300,
    height: 50,
    justifyContent: "center",
    borderRadius: 65,

    padding: 5,
  },
  ViewInnMain: { flexGrow: 1, justifyContent: "center", alignItems: "center" },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "left",
    marginLeft: 40,
  },
  btnGoogle: {
    marginBottom: 8,
    backgroundColor: "#FF362E",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 65,
  },
  btnfacebook: {
    marginBottom: 8,

    backgroundColor: "#3C40C6",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 65,
  },
  googlIcon: { color: "#fff", position: "absolute", left: 5 },
  facebookIcon: { color: "#fff", position: "absolute", left: 15 },
  btnProceed: { color: "#fff", fontSize: 20, textAlign: "center" },
});

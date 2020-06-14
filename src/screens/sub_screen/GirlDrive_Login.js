import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const GirlDrive_Login = ({
  ShowEmailLoginScreenFunction,
  ShowPhoneLoginScreenFunction,
}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.btnView}>
        <TouchableOpacity
          onPress={ShowEmailLoginScreenFunction}
          style={[Styles.btnEmail, { backgroundColor: "#fff" }]}
        >
          <Text style={Styles.btnText}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ShowPhoneLoginScreenFunction}
          style={[Styles.btnPhone, { backgroundColor: "#f2e4e3" }]}
        >
          <Text style={Styles.btnText}>Phone</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GirlDrive_Login;

const Styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  connectText: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 25,
    fontWeight: "700",
    color: "#b90000",
    fontFamily: "",
  },
  btnView: { flexDirection: "row", margin: 0, backgroundColor: "#123" },
  btnEmail: {
    backgroundColor: "#CE3737",
    width: "50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 10,
    elevation: 10,
  },
  btnPhone: {
    alignItems: "center",
    backgroundColor: "#fff",
    width: "50%",
    height: 50,
    justifyContent: "center",
    // borderRadius: 10,
    elevation: 10,
  },
  btnText: { fontSize: 18, color: "#b90000" },
});

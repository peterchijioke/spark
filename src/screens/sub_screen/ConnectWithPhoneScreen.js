import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";

const ConnectWithPhoneScreen = () => {
  const moveToLogin = () => {
    return Alert.alert("peter");
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.txtPhone1}>What is your Phone number?</Text>
      <View style={Styles.inputPhoneView}>
        <View style={Styles.countryCodeView}>
          <Text style={Styles.countryCodeTxt}>+234</Text>
        </View>
        <TextInput
          style={Styles.inputPhone}
          keyboardType="phone-pad"
          onChangeText={(text) => {}}
          placeholder="Phone number"
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={Styles.termsTxt1}>By signing up you agree with</Text>
        <Text style={Styles.termsTxt2}>
          our terms and conditions and privacy policy
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={Styles.btn_proceed}>
          <Text style={Styles.btnTextConfirmation}>SEND CONFIRMATION CODE</Text>
        </TouchableOpacity>
        <View style={Styles.AlreadyLoginView}>
          <Text style={Styles.termsTxt2}>Already have an account?</Text>
          <TouchableOpacity onPress={moveToLogin}>
            <Text style={Styles.loginTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConnectWithPhoneScreen;
const Styles = StyleSheet.create({
  container: {},
  txtPhone1: {
    color: "#b90000",
    marginTop: 20,
    fontSize: 20,
    fontFamily: "serif",
    textAlign: "center",
  },
  inputPhoneView: {
    borderColor: "#123",
    // backgroundColor: "#b90000",
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  inputPhone: {
    alignSelf: "center",
    marginLeft: 18,
    width: "60%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingLeft: 25,
    fontSize: 16,
    fontFamily: "serif",
    color: "#B90000",
    borderColor: "#b90000",
    borderWidth: 1,
  },
  countryCodeView: {
    borderColor: "#b90000",
    borderWidth: 1,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "20%",
    height: 50,
    borderRadius: 20,
  },
  countryCodeTxt: {
    fontSize: 18,
    color: "#B90000",
    fontWeight: "700",
    fontFamily: "serif",
  },
  termsTxt2: {
    textAlign: "center",
    color: "#b90000",
    fontFamily: "serif",
    fontWeight: "700",
  },
  termsTxt1: {
    color: "#b90000",
    textAlign: "center",
    fontStyle: "italic",
  },
  btn_proceed: {
    backgroundColor: "#e92d2d",
    width: 280,
    height: 50,
    justifyContent: "center",
    borderRadius: 65,
    elevation: 3,
    padding: 5,
  },
  btnTextConfirmation: {
    color: "#fff",
    fontSize: 16,
    elevation: 3,
    fontFamily: "serif",
    textAlign: "center",
  },
  AlreadyLoginView: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 40,
    justifyContent: "center",
  },
  loginTxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#b90000",
    fontFamily: "serif",
  },
});

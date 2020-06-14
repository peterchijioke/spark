import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const loginWithEmailForm = () => {
  const moveToConnectWith = () => {
    // Alert.prompt("peter");
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.inputPhoneView}>
        <TextInput
          style={Styles.inputEmail}
          keyboardType="email-address"
          onChangeText={(email) => emailOnChangeFunc(email)}
          placeholder="Email"
          // autoFocus={true}
          inlineImageLeft="search"
        />
        <TextInput
          style={Styles.inputPassword}
          onChangeText={(password) => passwordOnChangeFunc(password)}
          placeholder="Password"
          inlineImageLeft="search"
        />
      </View>

      <View
        style={{
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={Styles.btn_proceed}>
          <Text style={Styles.btnTextLogin}>Login</Text>
        </TouchableOpacity>

        <View style={Styles.AlreadyLoginView}>
          <Text style={Styles.termsTxt2}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={moveToConnectWith}
            style={{ height: hp("3%") }}
          >
            <Text style={Styles.loginTxt}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default loginWithEmailForm;

const Styles = StyleSheet.create({
  container: { flex: 1, marginTop: 80 },

  inputPhoneView: {
    borderColor: "#123",
    // backgroundColor: "#b90000",
    marginTop: 25,
    justifyContent: "center",
  },
  inputEmail: {
    alignSelf: "center",
    width: wp("80%"),
    height: hp("7.5%"),
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingLeft: 25,
    fontSize: 16,
    fontFamily: "serif",
    color: "#B90000",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  inputPassword: {
    alignSelf: "center",
    width: wp("80%"),
    height: hp("7.5%"),
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingLeft: 25,
    fontSize: 16,
    fontFamily: "serif",
    color: "#B90000",
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 30,
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
    marginTop: wp("10%"),
    backgroundColor: "#fff",
    width: wp("75%"),
    height: hp("7%"),
    justifyContent: "center",
    borderRadius: 65,
    elevation: 3,
    // borderColor: "#b90000",
    // borderWidth: 1,
    padding: 5,
    shadowColor: "#b90000",
  },
  btnTextLogin: {
    elevation: 3,
    fontFamily: "serif",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#b90000",
  },
  AlreadyLoginView: {
    marginTop: wp("50%"),
    flexDirection: "row",
    height: Dimensions.get("screen").height,
    justifyContent: "center",
    width: Dimensions.get("screen").width,
  },
  loginTxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#b90000",
    fontFamily: "serif",
  },
});

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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const ConnectWithEmailScreen = () => {
  const moveToLogin = () => {
    return Alert.alert("Move to login page is in progress");
  };

  const passwordOnChangeFunc = (password) => {};

  const emailOnChangeFunc = (email) => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      Alert.prompt("peter this email is valid");
    }
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.inputPhoneView}>
        <TextInput
          style={Styles.inputEmail}
          keyboardType="email-address"
          onChangeText={(email) => emailOnChangeFunc(email)}
          placeholder="Email"
          autoFocus={true}
          inlineImageLeft="search"
        />
        <TextInput
          style={Styles.inputPassword}
          onChangeText={(password) => passwordOnChangeFunc(password)}
          placeholder="Password"
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
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={Styles.btn_proceed}>
          <Text
            style={[
              Styles.btnTextConfirmation,
              { fontSize: 18, fontWeight: "bold" },
            ]}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.btn_proceed,
            { marginTop: 20, backgroundColor: "#fff" },
          ]}
        >
          <MaterialCommunityIcons
            name="google"
            size={30}
            style={Styles.googlIcon}
          />
          <Text
            style={[
              Styles.btnTextConfirmation,
              { color: "#e92d2d", fontWeight: "bold" },
            ]}
          >
            Connect With Google
          </Text>
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

export default ConnectWithEmailScreen;
const Styles = StyleSheet.create({
  container: {},

  inputPhoneView: {
    borderColor: "#123",
    // backgroundColor: "#b90000",
    marginTop: 25,
    justifyContent: "center",
  },
  inputEmail: {
    alignSelf: "center",
    width: "80%",
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingLeft: 25,
    fontSize: 16,
    fontFamily: "serif",
    color: "#B90000",
    borderColor: "#b90000",
    borderWidth: 1,
  },
  inputPassword: {
    alignSelf: "center",
    width: "80%",
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingLeft: 25,
    fontSize: 16,
    fontFamily: "serif",
    color: "#B90000",
    borderColor: "#b90000",
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
    backgroundColor: "#e92d2d",
    width: wp("75%"),
    height: hp("7%"),
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
    marginTop: "5%",
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

  googlIcon: { position: "absolute", right: 240, color: "#FF362E" },
});

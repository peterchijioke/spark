import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
} from "react-native"; // imports inject and observer from 'mobx-react':
import { inject, observer } from "mobx-react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";

@inject("store")
@observer
export default class ConnectWithEmailScreen extends Component {
  moveToLogin = () => {
    return Alert.alert("Move to login page is in progress");
  };

  emailOnChangeFunc = (email) => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      Alert.prompt("peter this email is valid");
    }
  };
  render() {
    const {
      setFName,
      setlName,
      setPassword,
      setPhoneNumber,
      setEmail,
      userDetails,
    } = this.props.store;

    console.log(this.props.store.userDetails.fName);

    return (
      <View style={Styles.container}>
        <KeyboardAvoidingView>
          <View style={Styles.inputPhoneView}>
            <View style={[Styles.inputView, { marginBottom: 10 }]}>
              <Fontisto
                name="person"
                size={20}
                color="#b90000"
                style={Styles.icon}
              />
              <TextInput
                style={Styles.input}
                keyboardType="default"
                onChangeText={(fName) => setFName(fName)}
                placeholder="First Name"
                autoFocus={false}
                // inlineImageLeft="search"
              />
            </View>

            {/* first Name end */}
            <View style={[Styles.inputView, { marginBottom: 10 }]}>
              <Fontisto
                name="person"
                size={20}
                color="#b90000"
                style={Styles.icon}
              />
              <TextInput
                style={Styles.input}
                keyboardType="default"
                onChangeText={(lName) => setlName(lName)}
                placeholder="Last Name"
                autoFocus={false}
                // inlineImageLeft="search"
              />
            </View>

            {/* Last Name end */}
            <View style={[Styles.inputView, { marginBottom: 10 }]}>
              <Fontisto
                name="phone"
                size={20}
                color="#b90000"
                style={Styles.icon}
              />
              <TextInput
                style={Styles.input}
                keyboardType="number-pad"
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                placeholder="Phone number"
                autoFocus={false}
                // inlineImageLeft="search"
              />
            </View>

            {/* email end */}
            <View style={[Styles.inputView, { marginBottom: 10 }]}>
              <Fontisto
                name="at"
                size={20}
                color="#b90000"
                style={Styles.icon}
              />
              <TextInput
                style={Styles.input}
                keyboardType="email-address"
                onChangeText={(email) => setEmail(email)}
                placeholder="Email"
                autoFocus={false}
                // inlineImageLeft="search"
              />
            </View>

            {/* email end */}
            <View style={[Styles.inputView, { marginBottom: 10 }]}>
              <Fontisto
                name="key"
                size={20}
                color="#b90000"
                style={Styles.icon}
              />
              <TextInput
                style={Styles.input}
                keyboardType="default"
                passwordRules={true}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                placeholder="Password"
                autoFocus={false}
                // inlineImageLeft="search"
              />
            </View>

            {/* Password end */}
            <View style={Styles.inputView}>
              <Fontisto
                name="key"
                size={20}
                color="#b90000"
                style={Styles.icon}
              />
              <TextInput
                style={Styles.input}
                keyboardType="default"
                passwordRules={true}
                secureTextEntry={true}
                onChangeText={(Cpassword) => console.log(Cpassword)}
                placeholder="Confirm password"
                autoFocus={false}
                // inlineImageLeft="search"
              />
            </View>

            {/* confirm Password end */}
          </View>
        </KeyboardAvoidingView>

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
            <TouchableOpacity onPress={this.moveToLogin}>
              <Text style={Styles.loginTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

// export default ConnectWithEmailScreen;

const HEIGHT = Dimensions.get("screen").height;
const Styles = StyleSheet.create({
  container: {},

  inputPhoneView: {
    borderColor: "#123",
    // backgroundColor: "#b90000",
    marginTop: 25,
    justifyContent: "center",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    height: HEIGHT - 760,
    // backgroundColor: "#f4d7d7",
    backgroundColor: "#ffffff",
    elevation: 7,
    shadowColor: "#f4d7d7",
    borderRadius: 10,
    // borderColor: "#b90000",
    // borderWidth: 1,
  },
  input: {
    fontSize: 16,
    borderRadius: 28,
    // backgroundColor: "#133",
    width: "80%",
    height: HEIGHT - 760,
    padding: 10,
  },
  icon: { marginRight: 15, marginLeft: 10 },

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

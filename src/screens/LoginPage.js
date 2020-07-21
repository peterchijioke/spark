import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ToastAndroid,
  Keyboard,
  Button,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { observer, inject } from "mobx-react";
import jwt from "jwt-decode";
import axios from "axios";
// import { Button } from "react-native-paper";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

@inject("store")
@observer
export default class LoginPage extends Component {
  state = { user_emailPhoneNumber: "", user_password: "" };
  componentDidMount() {
    // console.log(this.props.store.userLoginDetails);
    // if (this.state.user_emailPhoneNumber != "") {
    //   this.setState({ disableBtn: true });
    // }
  }
  componentWillUnmount() {
    // source.cancel("Operation canceled by the user.");
    source.cancel();
  }

  // password validation

  validatePassword = (password) => {
    if (8 > password.length) {
      Keyboard.dismiss();
      ToastAndroid.show(
        "passwords must be 8 characters or more.",
        ToastAndroid.SHORT
      );
    } else {
      return password;
    }
  };

  // email verification Function
  validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == null || email == "") {
      Keyboard.dismiss();
      ToastAndroid.show("email can't be blank", ToastAndroid.SHORT);
    }
    if (re.test(email) === false) {
      Keyboard.dismiss();
      ToastAndroid.show("Invalid email, try again", ToastAndroid.SHORT);
    } else {
      return email;
    }
  };

  // Number verification function
  numberValidation = (number) => {
    const num = new RegExp("^-?[0-9]*$");
    if (num.test(number) === false) {
      Keyboard.dismiss();
      ToastAndroid.show("Invalid Phone number!, try again", ToastAndroid.SHORT);
    } else {
      return number;
    }
  };

  loginEndPoint = async () => {
    if (this.state.user_emailPhoneNumber === "") {
      Keyboard.dismiss();
      ToastAndroid.show("Enter your phone number or email", ToastAndroid.SHORT);
    } else if (this.state.user_password === "") {
      Keyboard.dismiss();
      ToastAndroid.show("Password can't be blank", ToastAndroid.SHORT);
    } else {
      let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let num = new RegExp("^-?[0-9]*$");
      if (
        re.test(this.state.user_emailPhoneNumber) === true ||
        num.test(this.state.user_emailPhoneNumber) === true
      ) {
        const email = this.state.user_emailPhoneNumber;
      } else {
        Keyboard.dismiss();
        ToastAndroid.show(
          "Your phone number or email is invalid!",
          ToastAndroid.SHORT
        );
      }
      const passw = this.validatePassword(this.state.user_password);
      const {
        userLoginDetails,
        setLoginPhoneNumber_email,
        setLoginPassword,
      } = this.props.store;

      setLoginPassword(passw);
      setLoginPhoneNumber_email(this.state.user_emailPhoneNumber);

      if (
        typeof userLoginDetails.loginPhoneNumberEmail != "undefined" &&
        typeof userLoginDetails.loginPassword != "undefined"
      ) {
        const DATA = {
          email: userLoginDetails.loginPhoneNumberEmail,
          password: userLoginDetails.loginPassword,
        };

        try {
          const resp = await axios.get(
            "https://sparklogistics.herokuapp.com/users/login",
            DATA,
            {
              cancelToken: source.token,
            }
          );
          console.log(resp.data.message);
          this.poupRespo();
        } catch (e) {
          console.log(e.response);
        }
      } else {
        console.log("undefined field available");
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* <this.headerFunc /> */}
        <StatusBar barStyle="light-content" backgroundColor="#b90000" />

        <View style={{ backgroundColor: "#f1f1f1" }}>
          {/* <GirlDrive_Login /> */}

          <ImageBackground
            source={require("../img/manRun22.png")}
            style={{
              height: HEIGHT,
              // opacity: 0.9,
            }}
          >
            <SafeAreaView style={Styles.safeView}>
              <View style={{ marginTop: 20, marginBottom: 20 }}>
                <Image
                  source={require("../img/logo.png")}
                  style={{
                    height: HEIGHT - 680,
                    width: WIDTH - 230,
                    // borderRadius: 10,
                  }}
                  resizeMode="cover"
                />
              </View>
              <Text style={Styles.loginTxt}>Login</Text>
              <Text
                style={{
                  color: "#ccc",
                  fontWeight: "600",
                  fontSize: 15,
                  marginLeft: 20,
                  marginBottom: 25,
                  alignSelf: "flex-start",
                }}
              >
                Please enter your credentials
              </Text>

              {/* first Name end */}
              <View style={[Styles.inputView, { marginBottom: 25 }]}>
                <Fontisto
                  name="person"
                  size={20}
                  color="#b90000"
                  style={Styles.icon}
                />
                <TextInput
                  style={Styles.input}
                  keyboardType="default"
                  onChangeText={(user_emailPhoneNumber) =>
                    this.setState({ user_emailPhoneNumber })
                  }
                  placeholder="Email or phone number"
                  autoFocus={false}
                  // inlineImageLeft="search"
                />
              </View>

              <View style={[Styles.inputView]}>
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
                  onChangeText={(user_password) =>
                    this.setState({ user_password })
                  }
                  placeholder="Password"
                  autoFocus={false}
                />
              </View>
              <View style={Styles.TxtView}>
                <Text style={{ color: "#b90000", marginRight: 55 }}>
                  Forgot password
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Connect")}
                >
                  <Text
                    style={{ color: "#b90000", marginLeft: 55, marginRight: 0 }}
                  >
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                touchSoundDisabled={false}
                disabled={this.state.disableBtn}
                style={Styles.btn}
                onPress={this.loginEndPoint}
              >
                <Text style={Styles.btnTxt}>Login</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </ImageBackground>
        </View>
      </React.Fragment>
    );
  }
}

const Styles = StyleSheet.create({
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: HEIGHT - 760,
    backgroundColor: "#ffffff",
    elevation: 7,
    shadowColor: "#f4d7d7",
    borderRadius: 10,
  },
  input: {
    fontSize: 16,
    borderRadius: 28,
    width: "90%",
    height: HEIGHT - 760,
    padding: 10,
  },
  icon: { marginRight: 15, marginLeft: 10 },

  safeView: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: HEIGHT - 600,
    width: WIDTH - 50,
    height: HEIGHT - 260,
    marginLeft: 25,
    elevation: 7,
    borderWidth: 1,
    borderColor: "#f1f1f1",
  },
  btn: {
    backgroundColor: "#e92d2d",
    width: wp("75%"),
    height: hp("7%"),
    justifyContent: "center",
    borderRadius: 65,
    borderColor: "#f1f1f1",
    borderWidth: 2,
    elevation: 7,
    padding: 5,
    marginTop: 30,
  },
  btnTxt: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
    color: "#ffffff",
    fontSize: 18,
  },
  TxtView: {
    flexDirection: "row",
    marginTop: 40,
  },
  loginTxt: {
    color: "#e92d2d",
    fontSize: 30,
    alignSelf: "flex-start",
    marginLeft: 20,
    fontWeight: "bold",
  },
});

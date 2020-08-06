import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native"; // imports inject and observer from 'mobx-react':
import { inject, observer } from "mobx-react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import axios from "axios";
import { Root, Popup } from "popup-ui";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export default class ConnectWithEmailScreen extends Component {
  // constructor(props) {
  //   super(props);

  //   this.email_pass_validation(
  //     this.state.user_email,
  //     this.state.password,
  //     this.state.C_password
  //   );
  // }
  state = {
    last_Name: "",
    first_Name: "",
    user_email: "",
    phone_number: "",
    password: "",
    C_password: "",
    error: "",
  };
  // CancelToken = axios.Cancel;

  // componentDidMount() {
  //   console.log(this.props.navigation);
  // }
  componentWillUnmount() {
    // source.cancel("Operation canceled by the user.");
    source.cancel();
  }

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

  validateAllLetters = (name) => {
    let letters = new RegExp("[a-zA-Z]+");

    if (letters.test(name) === true) {
      return name;
    } else {
      Keyboard.dismiss();
      ToastAndroid.show(
        "Both names must be alphabet characters only!, try again ",
        ToastAndroid.SHORT
      );
    }
  };

  validatePassword = (pass1, cPass) => {
    if (8 > pass1.length && 8 > cPass.length) {
      Keyboard.dismiss();
      ToastAndroid.show(
        "Both passwords must be 8 characters or more.",
        ToastAndroid.SHORT
      );
    } else if (pass1 != cPass) {
      Keyboard.dismiss();
      ToastAndroid.show("Both password must be same.", ToastAndroid.SHORT);
    } else {
      return pass1;
    }
  };
  numberValidation = (number) => {
    const num = new RegExp("^-?[0-9]*$");
    if (num.test(number) === false) {
      Keyboard.dismiss();
      ToastAndroid.show("Invalid Phone number!, try again", ToastAndroid.SHORT);
    } else {
      return number;
    }
  };

  passToStore = (first_Name, last_Name, phone_number, user_email, password) => {
    const {
      setFName,
      setLName,
      setPassword,
      setPhoneNumber,
      setEmail,
      userDetails,
    } = this.props.store;

    setFName(first_Name);
    setEmail(user_email);
    setPassword(password);
    setLName(last_Name);
    setPhoneNumber(phone_number);
  };

  registrationEndPoint = async () => {
    if (this.state.first_Name === "") {
      Keyboard.dismiss();
      ToastAndroid.show("First name can't be blank", ToastAndroid.SHORT);
    } else if (this.state.last_Name === "") {
      Keyboard.dismiss();
      ToastAndroid.show("Last name can't be blank", ToastAndroid.SHORT);
    } else if (this.state.phone_number === "") {
      Keyboard.dismiss();
      ToastAndroid.show("Phone number can't be blank", ToastAndroid.SHORT);
    } else if (this.state.user_email === "") {
      Keyboard.dismiss();
      ToastAndroid.show("email can't be blank", ToastAndroid.SHORT);
    } else if (this.state.password === "") {
      Keyboard.dismiss();
      ToastAndroid.show("Password can't be blank", ToastAndroid.SHORT);
    } else if (this.state.C_password === "") {
      Keyboard.dismiss();
      ToastAndroid.show("Confirm Password can't be blank", ToastAndroid.SHORT);
    } else {
      const email = this.validateEmail(this.state.user_email);
      const firstName = this.validateAllLetters(this.state.first_Name);
      const lastName = this.validateAllLetters(this.state.last_Name);
      const passw = this.validatePassword(
        this.state.password,
        this.state.C_password
      );
      const phone = this.numberValidation(this.state.phone_number);

      this.passToStore(firstName, lastName, phone, email, passw);

      const { userDetails } = this.props.store;

      if (
        typeof userDetails.fName != "undefined" &&
        typeof userDetails.lName != "undefined" &&
        typeof userDetails.phoneNumber != "undefined" &&
        typeof userDetails.email != "undefined" &&
        typeof userDetails.password != "undefined" &&
        typeof userDetails.Cpassword != "undefined"
      ) {
        const { userDetails } = this.props.store;

        let DATA = {
          firstname: userDetails.fName,
          surname: userDetails.lName,
          telephone: userDetails.phoneNumber,
          email: userDetails.email,
          password: userDetails.password,
        };

        try {
          const resp = await axios.post(
            "https://sparklogistics.herokuapp.com/users/signup",
            DATA,
            {
              cancelToken: source.token,
            }
          );
          console.log(resp.data.message);
          this.poupRespo();
          this.props.navigation.navigate("LoginPage");
        } catch (e) {
          console.log(e.response.data);
        }
        // console.log(DATA);
      } else {
        console.log("undefined field available..");
      }
    }
  };
  poupRespo = () => {
    Popup.show(
      {
        type: "Success",
        title: "Signup complete",
        button: false,
        textBody: "Congrats! you've successfully registered",
        buttontext: "Ok",
        callback: () => {
          Popup.hide();
          this.moveToLogin();
        },
      },
      { useNativeDriver: false }
    );
  };
  moveToLogin = () => {
    this.props.navigationObj.navigate("LoginPage");
  };

  render() {
    // console.log(this.props.navigationObj);

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
                value={this.state.first_Name}
                onChangeText={(fName) => this.setState({ first_Name: fName })}
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
                onChangeText={(lName) => this.setState({ last_Name: lName })}
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
                onChangeText={(phoneNumber) =>
                  this.setState({ phone_number: phoneNumber })
                }
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
                onChangeText={(email) => this.setState({ user_email: email })}
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
                onChangeText={(password) =>
                  this.setState({ password: password })
                }
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
                onChangeText={(Cpassword) =>
                  this.setState({ C_password: Cpassword })
                }
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
          <TouchableOpacity
            style={Styles.btn_proceed}
            onPress={this.registrationEndPoint}
          >
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
            onPress={this.poupRespo}
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

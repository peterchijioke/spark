import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Keyboard,
} from "react-native";
import {
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Toast,
  Root,
} from "native-base";
import { Fontisto, Entypo } from "react-native-vector-icons";
const { height, width } = Dimensions.get("window");

export class Logistics_bookingPage extends Component {
  state = { firstname: "", surname: "", mobile: "", address: "" };

  bookEndpoint = () => {
    if (
      this.state.firstname === "" &&
      this.state.surname === "" &&
      this.state.mobile === "" &&
      this.state.address === ""
    ) {
      Keyboard.dismiss();
      Toast.show({
        text: "make sure you fill the form..!",
        buttonText: "Okay",
        duration: 3000,
        type: "warning",
      });
    } else if (this.state.firstname === "") {
      Keyboard.dismiss();
      Toast.show({
        text: "Put reciever's first name!",
        buttonText: "Okay",
        duration: 3000,
        type: "warning",
      });
    } else if (this.state.surname === "") {
      Keyboard.dismiss();
      Toast.show({
        text: "Put reciever's surename!",
        buttonText: "Okay",
        duration: 3000,
        type: "warning",
      });
    } else if (this.state.address === "") {
      Keyboard.dismiss();
      Toast.show({
        text: "Put reciever's address!",
        buttonText: "Okay",
        duration: 3000,
        type: "warning",
      });
    } else if (this.state.mobile === "") {
      Keyboard.dismiss();
      Toast.show({
        text: "Put reciever's phone number!",
        buttonText: "Okay",
        duration: 3000,
        type: "warning",
      });
    } else {
      const recieverData = {
        fname: this.state.firstname,
        surename: this.state.surname,
        phone: this.state.mobile,
        addy: this.state.address,
      };

      console.log(recieverData);
    }
  };

  render() {
    return (
      <Root>
        <ImageBackground
          source={require("../img/tree.gif")}
          style={styles.container}
        >
          <Header
            style={{ backgroundColor: "#e92d2d" }}
            // androidStatusBarColor={statusBarColor}
            androidStatusBarColor="#000000"
            iosBarStyle="light-content"
          >
            <Left>
              <Button
                transparent
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <Icon name="arrow-back" style={{ color: "#fff" }} />
              </Button>
            </Left>
            <Body>
              <Title
                style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
              >
                Receiver's details
              </Title>
            </Body>
          </Header>
          <View style={styles.TextInputView}>
            {/* email end */}
            <View style={[styles.inputView]}>
              <Fontisto
                name="person"
                size={20}
                color="#b90000"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                keyboardType="default"
                // passwordRules={true}
                // secureTextEntry={true}
                onChangeText={(firstname) => this.setState({ firstname })}
                placeholder="Receiver's First name"
              />
            </View>
            {/* last name */}
            <View style={[styles.inputView]}>
              <Fontisto
                name="person"
                size={20}
                color="#b90000"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                keyboardType="default"
                // passwordRules={true}
                // secureTextEntry={true}
                onChangeText={(surname) => this.setState({ surname })}
                placeholder="Receiver's Surname"
              />
            </View>
            {/* phone number */}
            <View style={[styles.inputView]}>
              <Fontisto
                name="phone"
                size={20}
                color="#b90000"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                // passwordRules={true}
                // secureTextEntry={true}
                onChangeText={(mobile) => this.setState({ mobile })}
                placeholder="07037********65"
              />
            </View>

            {/* Address */}

            <View style={[styles.inputView]}>
              <Entypo
                name="address"
                size={20}
                color="#b90000"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                keyboardType="default"
                // passwordRules={true}
                // secureTextEntry={true}
                onChangeText={(address) => this.setState({ address })}
                placeholder="Receiver's address"
              />
            </View>
          </View>
          <TouchableOpacity
            // disabled={true}
            style={styles.btn}
            onPress={() => this.bookEndpoint()}
          >
            <Text style={[styles.btnText]}>BOOK</Text>
          </TouchableOpacity>
        </ImageBackground>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
  },
  TextInputView: {
    // backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "center",

    height: height / 1.5,
    top: height / 8,

    // elevation: 3,
  },
  inputView: {
    marginBottom: 20,
    top: 15,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    height: height - 760,
    backgroundColor: "#fff",
    elevation: 7,
    shadowColor: "#f4d7d7",
    borderRadius: 10,
  },
  input: {
    fontSize: 16,
    borderRadius: 28,
    width: "80%",
    height: height - 800,
    padding: 10,
  },
  icon: { marginRight: 15, marginLeft: 10 },
  btn: {
    backgroundColor: "#e92d2d",
    width: "75%",
    height: "7%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 65,
    elevation: 3,
    padding: 5,
    // opacity: 0.2,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    elevation: 3,
    fontFamily: "serif",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Logistics_bookingPage;

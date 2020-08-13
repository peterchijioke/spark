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
  Image,
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
import AsyncStorage from "@react-native-community/async-storage";
const { height, width } = Dimensions.get("window");

export class Logistics_bookingPage extends Component {
  state = {
    firstname: "",
    surname: "",
    mobile: "",
    address: "",
    resultAddy: "",
    details: "",
  };

  bookEndpoint = async () => {
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
      try {
        const AcyncUserdetails = await AsyncStorage.getItem("userDetails");
        const detailresult =
          AcyncUserdetails != null ? JSON.parse(AcyncUserdetails) : null;
        //  console.log(result);
        const details = JwtDecode(detailresult);
        this.setState({ details });

        const AcyncUsercord = await AsyncStorage.getItem("cord");
        const result = AcyncUsercord != null ? JSON.parse(AcyncUsercord) : null;
        this.setState({ resultAddy: result });
      } catch (error) {
        console.log(error);
      }

      // {
      // "userid":"5f049a2c952d96002489aec5",
      // "sender_firstname":"Max",
      // "sender_surname":"Ludwig",
      // "sender_telephone":"0812566589",
      // "sender_address":"18 Ramlat Timson Street",
      // "sender_latitude":"59.3293371",
      // "sender_longitude":"13.4877472",
      // "receiver_firstname":"Rogers",
      // "receiver_surname":"Captain",
      // "receiver_telephone":"08182210215",
      // "receiver_address":"30 Asiri Akofa Street",
      // "receiver_latitude":"59.3225525",
      // "receiver_longitude":"13.4619422"
      // }

      const recieverData = {
        userid: this.state.details.userid,
        sender_firstname: this.state.details.firstname,
        sender_surname: this.state.details.surname,
        sender_telephone: this.state.details.phone_number,
        // sender_address:this.state.resultAddy
        sender_latitude: this.state.resultAddy.latitude,
        sender_longitude: this.state.resultAddy.longitude,
        receiver_firstname: this.state.firstname,
        receiver_surname: this.state.surname,
        receiver_telephone: this.state.mobile,
        receiver_address: this.state.address,
        receiver_latitude: "59.3225525",
        receiver_longitude: "13.4619422",
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
          {/* <Header
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
          </Header> */}

          <View
            style={{
              backgroundColor: "#133",
              width: width,
              height: height - 550,
              backgroundColor: "#e92d2d",
              borderBottomLeftRadius: 28,
              borderBottomRightRadius: 60,
              elevation: 7,
              // borderBottomWidth: 1,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={styles.iconArrow}
            >
              <Icon name="arrow-back" style={{ color: "#fff" }} />
            </TouchableOpacity>

            <Image
              source={require("../img/logowhite.png")}
              style={{
                width: 100,
                height: 30,
                top: 10,
                alignSelf: "center",
                marginBottom: 5,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 26,
                  top: 25,
                  left: 20,
                  color: "#fff",
                }}
              >
                Hello, <Text>Chukwu</Text>
              </Text>
              <Text style={{ marginTop: 30, left: 20, color: "#fff" }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#133",
                  }}
                >
                  NOTE:
                </Text>
                Please make sure all details are correct before submitting the
                form!
              </Text>
            </View>
          </View>
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
    height: height / 2.5,
    marginTop: 30,
    marginBottom: 30,
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
    height: "8%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 65,
    elevation: 7,
    padding: 5,
    // opacity: 0.2,
    marginTop: 30,
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
  iconArrow: {
    zIndex: 9,
    position: "absolute",
    shadowRadius: 5,
    left: 15,
    top: 10,
    // justifyContent: "space-around",
    // alignItems: "center",
  },
});

export default Logistics_bookingPage;

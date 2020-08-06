import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { Header, Left, Body, Button, Icon, Title } from "native-base";
import { Fontisto, Entypo } from "react-native-vector-icons";

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

export default class Logistics_bookingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
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
                passwordRules={true}
                secureTextEntry={true}
                onChangeText={(password) =>
                  this.setState({ password: password })
                }
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
                passwordRules={true}
                secureTextEntry={true}
                onChangeText={(password) =>
                  this.setState({ password: password })
                }
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
                passwordRules={true}
                secureTextEntry={true}
                onChangeText={(password) =>
                  this.setState({ password: password })
                }
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
                passwordRules={true}
                secureTextEntry={true}
                onChangeText={(password) =>
                  this.setState({ password: password })
                }
                placeholder="Receiver's address"
              />
            </View>
          </View>
          <TouchableOpacity
            // disabled={true}
            style={styles.btn}
            onPress={() => {}}
          >
            <Text style={[styles.btnText]}>BOOK</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}
let { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
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

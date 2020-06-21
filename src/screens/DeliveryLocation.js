import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { AntDesign } from "react-native-vector-icons";

import HeaderMain from "./sub_screen/HeaderMain";

const DeliveryLocation = () => {
  const DestinationOnChangeFunc = (email) => {
    const email1 = { email };
  };
  return (
    <View>
      <HeaderMain />
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <View style={[styles.square, styles.firstSquare]}>
            <Text
              style={{
                color: "#b90000",
                fontSize: 20,
                fontWeight: "700",
                marginTop: 10,
              }}
            >
              Current Location
            </Text>
            {/* <View style={styles.horiLine}></View> */}

            <TextInput
              style={styles.inputDestination}
              keyboardType="default"
              onChangeText={(email) => DestinationOnChangeFunc(email)}
              placeholder="Enter Destination"
              // autoFocus={true}
              inlineImageLeft="search"
            />
          </View>
          {/* second square */}
          <View style={[styles.square, styles.secondSquare]}>
            <View style={styles.homeView}>
              <Image
                source={require("../img/home.png")}
                style={styles.HomeImageInner}
              />

              <Text style={styles.HomeTxt}>Home</Text>
            </View>
            <Text style={styles.addressTxt}>
              50, jolomi Abiola close, Census, Surulere Lagos.
            </Text>

            <View style={styles.horiLine}></View>

            {/* second adress office */}
            <View style={styles.homeView}>
              {/* <Icon name="home" style={{ color: "#b90000" }} /> */}

              <Image
                source={require("../img/portfolio.png")}
                style={styles.HomeImageInner}
              />

              <Text style={styles.HomeTxt}>Office</Text>
            </View>
            <Text style={styles.addressTxt}>
              150, Herbert Macualay Way, Sabo, Yaba , Lagos
            </Text>
          </View>
          <View style={[styles.square, styles.thirdSquare]}>
            {/* first address */}
            <View style={styles.homeView}>
              {/* <Icon name="home" style={{ color: "#b90000" }} /> */}

              {/* <Image
                source={require("../img/redArrow.png")}
                style={styles.HomeImageInner}
              /> */}
              <AntDesign name="arrowright" size={24} color="#b90000" />

              <Text style={styles.HomeTxt}>Office</Text>
            </View>
            <Text style={styles.addressTxt}>
              150, Herbert Macualay Way, Sabo, Yaba , Lagos
            </Text>

            <View style={styles.horiLine}></View>
            <View style={styles.homeView}>
              {/* <Icon name="home" style={{ color: "#b90000" }} /> */}

              {/* <Image
                source={require("../img/redArrow.png")}
                style={styles.HomeImageInner}
              /> */}
              <AntDesign name="arrowright" size={24} color="#b90000" />

              <Text style={styles.HomeTxt}>Office</Text>
            </View>
            <Text style={styles.addressTxt}>
              50, jolomi Abiola close, Census, Surulere Lagos.
            </Text>
            <View style={styles.horiLine}></View>
            {/* thired address */}

            <View style={styles.homeView}>
              {/* <Icon name="home" style={{ color: "#b90000" }} /> */}

              {/* <Image
                source={require("../img/redarrow.png")}
                style={styles.HomeImageInner}
              /> */}
              <AntDesign name="arrowright" size={24} color="#b90000" />

              <Text style={styles.HomeTxt}>Office</Text>
            </View>
            <Text style={styles.addressTxt}>
              20, LASU Road, Iyanoba, Lagos State
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default DeliveryLocation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    height: Dimensions.get("window").height,
    flexDirection: "column",
    // justifyContent: "space-evenly",
    alignItems: "center",
  },
  square: { backgroundColor: "#fff", borderRadius: 20 },
  firstSquare: {
    width: "90%",
    height: "18%",
    marginBottom: "10%",
    marginTop: "10%",
    alignItems: "center",
  },

  secondSquare: { width: "90%", height: "20%", marginBottom: "10%" },
  thirdSquare: { width: "90%", height: "30%" },
  inputDestination: {
    width: "90%",
    height: "80%",
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 20,
    fontFamily: "serif",
    color: "#b90000",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  homeView: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
  },
  HomeImageInner: {
    width: 20,
    height: 20,
  },
  HomeTxt: {
    // marginTop: 5,
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "700",
    color: "#b90000",
  },
  horiLine: {
    marginLeft: 12,
    marginRight: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  addressTxt: {
    marginBottom: 10,
    marginTop: 3,
    marginLeft: 12,
    color: "#b90000",
  },
});

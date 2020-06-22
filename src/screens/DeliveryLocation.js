import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign, FontAwesome } from "react-native-vector-icons";
import DestinationPageHeader from "./DeliveryLocation_subScreens/DestinationPageHeader";

const DeliveryLocation = () => {
  const DestinationOnChangeFunc = (email) => {
    const email1 = { email };
  };
  return (
    <KeyboardAvoidingView>
      <DestinationPageHeader />

      <View style={styles.container}>
        <View style={[styles.square, styles.firstSquare]}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome
              name="map-marker"
              size={22}
              color="#77e76c"
              style={{ marginTop: 12, marginRight: 15 }}
            />
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
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: "#ccc",
              width: "90%",
              marginTop: 18,
            }}
          ></View>

          {/* textInput View */}

          <View style={styles.textInpuView}>
            {/* <AntDesign name="enviromento" size={24} color="#b90000" /> */}
            <TextInput
              style={styles.inputDestination}
              keyboardType="default"
              onChangeText={(destinationPoint) =>
                DestinationOnChangeFunc(destinationPoint)
              }
              placeholder="Enter Destination"
              // autoFocus={true}
              underlineColorAndroid="transparent"
              inlineImageLeft="search"
            />
            <FontAwesome
              name="search"
              size={28}
              color="#e92d2d"
              onPress={() => console.log("peter")}
            />
          </View>
          {/* textInput view ends */}
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
        {/* third square */}
        <View style={[styles.square, styles.thirdSquare]}>
          {/* first address */}
          <View style={styles.homeView}>
            <AntDesign name="arrowright" size={24} color="#b90000" />

            <Text style={styles.HomeTxt}>Office</Text>
          </View>
          <Text style={styles.addressTxt}>
            150, Herbert Macualay Way, Sabo, Yaba , Lagos
          </Text>

          <View style={styles.horiLine}></View>

          {/* secon address */}
          <View style={styles.homeView}>
            <AntDesign name="arrowright" size={24} color="#b90000" />

            <Text style={styles.HomeTxt}>Office</Text>
          </View>
          <Text style={styles.addressTxt}>
            50, jolomi Abiola close, Census, Surulere Lagos.
          </Text>

          <View style={styles.horiLine}></View>

          {/* thired address */}

          <View style={styles.homeView}>
            <AntDesign name="arrowright" size={24} color="#b90000" />

            <Text style={styles.HomeTxt}>Office</Text>
          </View>
          <Text style={styles.addressTxt}>
            20, LASU Road, Iyanoba, Lagos State
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    width: "80%",
    height: "80%",
    borderRadius: 25,
    // marginTop: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 1,
    paddingBottom: 2,
    fontSize: 16,
    fontFamily: "serif",
    color: "#b90000",
    // backgroundColor: "#123",
    // borderWidth: 1,
    // borderColor: "#ccc",
  },
  textInpuView: {
    justifyContent: "space-around",
    elevation: 2,
    width: "90%",
    borderRadius: 25,
    marginTop: 15,
    height: "85%",
    backgroundColor: "#f4d7d7",
    alignItems: "center",
    flexDirection: "row",
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

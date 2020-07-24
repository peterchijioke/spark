import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Button, Thumbnail } from "native-base";
import {
  MaterialIcons,
  FontAwesome,
  Feather,
  AntDesign,
} from "react-native-vector-icons";
import * as Linking from "expo-linking";

const { width, height } = Dimensions.get("window");

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <ScrollView style={styles.container}>
          <SafeAreaView style={styles.profView}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  width: width / 5,
                  height: width / 5,
                  borderRadius: 20,
                  top: width / 28,
                  left: 20,
                }}
              ></View>
              <View style={{ marginLeft: 50, marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Peter</Text>
                <TouchableOpacity>
                  <Text style={{ fontSize: 16 }}>View profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>

          <View style={styles.btn}>
            <MaterialIcons
              name="payment"
              size={22}
              // color="#77e76c"
              style={styles.icon}
              color="#b90000"
            />
            <TouchableOpacity style={{ width: width / 3 }}>
              <Text style={styles.txt}> Payments </Text>
            </TouchableOpacity>
          </View>

          {/* ==================================================================== */}

          <View style={styles.btn}>
            <FontAwesome
              name="history"
              size={22}
              // color="#77e76c"
              style={[styles.icon]}
              color="#b90000"
            />
            <TouchableOpacity style={{ width: width / 3 }}>
              <Text style={styles.txt}> History </Text>
            </TouchableOpacity>
          </View>

          {/* ================================================ */}
          <View style={styles.btn}>
            <Feather
              name="gift"
              size={22}
              // color="#77e76c"
              style={[styles.icon]}
              color="#b90000"
            />
            <TouchableOpacity style={{ width: width / 3 }}>
              <Text style={styles.txt}> Promotions </Text>
            </TouchableOpacity>
          </View>

          {/* ====================================================== */}

          <View style={styles.btn}>
            <FontAwesome
              name="support"
              size={22}
              // color="#77e76c"
              style={[styles.icon]}
              color="#b90000"
            />
            <TouchableOpacity style={{ width: width / 3 }}>
              <Text style={styles.txt}> Support </Text>
            </TouchableOpacity>
          </View>

          {/* ===================================================================== */}
          <View style={styles.btn}>
            <FontAwesome
              name="question-circle-o"
              size={22}
              // color="#77e76c"
              style={[styles.icon]}
              color="#b90000"
            />
            <TouchableOpacity style={{ width: width / 3 }}>
              <Text style={styles.txt}> About </Text>
            </TouchableOpacity>
          </View>
          {/* ============================================================= */}

          <View style={styles.btn}>
            <AntDesign
              name="hearto"
              size={22}
              // color="#77e76c"
              style={styles.icon}
              color="#b90000"
            />
            <TouchableOpacity style={{ width: width / 3 }}>
              <Text style={styles.txt}> Free Ride </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.toDriveBtView}>
          <FontAwesome
            name="car"
            size={22}
            // color="#77e76c"
            style={{ marginRight: 5, top: 15 }}
            color="#b90000"
          />
          <TouchableOpacity
            style={styles.toDriveBt}
            onPress={() => {
              Linking.openURL("https://google.com");
            }}
          >
            <Text style={styles.toDrivetxt}>SIGN UP TO DRIVE</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    marginRight: 5,
  },
  txt: { fontSize: 16 },
  icon: { marginRight: 15 },
  btn: {
    flexDirection: "row",
    marginLeft: 20,
    margin: 15,
  },
  profView: {
    backgroundColor: "#ccc",
    width: width,
    height: 100,
    marginBottom: 23,
  },
  toDriveBtView: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 30,
    flexDirection: "row",
    borderRadius: 28,
    borderColor: "#b90000",
    borderWidth: 1,
    width: width - 120,
    height: 50,
  },
  toDriveBt: {
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  toDrivetxt: { fontSize: 16, color: "#b90000", fontWeight: "700" },
});

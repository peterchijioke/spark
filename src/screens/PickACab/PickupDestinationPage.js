import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Header, Left, Body, Button, Icon, Title } from "native-base";
const { height, width } = Dimensions.get("window");
import { EvilIcons, FontAwesome } from "react-native-vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

// AIzaSyBLsz3Bw1YJAN7GiPzsvYnlJSmxbUOQYMQ       MY GOOGLE MAP API Key
export default class PickupDestinationPage extends Component {
  state = { from: null, to: null };
  componentDidMount = () => {
    this._fetchRegionFromStore();
  };
  // UNSAFE_componentWillMount = async () => {
  //   // AsyncStorage.removeItem("address");
  // };
  _fetchRegionFromStore = async () => {
    try {
      const data = await AsyncStorage.getItem("address");
      let address = JSON.parse(data);
      this.setState({ address: address[0].street });
      console.log(address[0].street);
    } catch (e) {
      console.log(e.message);
    }
  };

  onChangeFromText = (from) => {
    this.setState({ from });
  };
  onChangeToText = (to) => {
    this.setState({ to });
  };
  render() {
    const adi = this.state.address;
    return (
      <React.Fragment>
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
          <Header
            style={{ backgroundColor: "#fff", elevation: 0 }}
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
                <Icon name="arrow-back" style={{ color: "#000" }} />
              </Button>
            </Left>
            <Body>
              <Title
                style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}
              >
                Set destination
              </Title>
            </Body>
          </Header>
          <View style={styles.inputView}>
            <View style={styles.inputViewView}>
              <EvilIcons
                name="location"
                color="#0ABDE3"
                size={25}
                style={{ top: 15, right: 10 }}
              />
              <TextInput
                style={styles.input}
                keyboardType="default"
                onChangeText={(from) => this.onChangeFromText(from)}
                placeholder="Pickup location"
                autoFocus={false}
                defaultValue={adi}
              />
            </View>

            {/* ============================================================================== */}
            <View style={styles.inputViewView}>
              <FontAwesome
                name="bullseye"
                color="#2ecc72"
                size={20}
                style={{ top: 15, right: 8 }}
              />
              <TextInput
                style={[styles.input, { left: 8 }]}
                keyboardType="default"
                onChangeText={(to) => this.onChangeToText(to)}
                placeholder="Destinaton"
                autoFocus={false}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.Btn}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
              DONE
            </Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  inputViewView: { flexDirection: "row", left: width / 15, marginTop: 20 },
  inputView: { backgroundColor: "#fff", height: height / 4 },
  input: {
    fontSize: 16,
    borderRadius: 15,
    backgroundColor: "#DAE0E2",
    width: "80%",
    height: height - 760,
    padding: 10,
    color: "#7B8788",
  },
  Btn: {
    position: "absolute",
    bottom: 0,
    marginBottom: width / 11,
    width: width - 76,
    height: 55,
    borderRadius: 28,
    elevation: 7,
    alignSelf: "center",
    backgroundColor: "#b90000",
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

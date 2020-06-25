import React, { Component } from "react";
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Image,
  Animated,
  StatusBar,
} from "react-native";
import { Content, Spinner } from "native-base";
import { AppLoading } from "expo";

export default class Splash extends Component {
  state = {
    logoAnim: new Animated.Value(0),
    logoText: new Animated.Value(0),
    loadinSpinner: false,
  };
  componentDidMount() {
    const nav = this.props.navigation;
    // setTimeout(() => {
    //   nav.navigate("DrawerActivity");
    // }, 3000);

    const { logoAnim, logoText, loadinSpinner } = this.state;
    Animated.parallel([
      Animated.spring(logoAnim, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
      }).start(),
      Animated.timing(logoText, {
        toValue: 1,
        duration: 1200,
      }).start(() => {
        this.setState({ loadinSpinner: true });
      }),
    ]);
  }

  spinnerInitFunction = () => {
    const { loadinSpinner } = this.state;

    if (loadinSpinner != false) {
      return <Spinner color="green" />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#b90000" />
        <View style={styles.logo}>
          <Animated.View
            style={{
              opacity: this.state.logoAnim,
              top: this.state.logoAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [80, 0],
              }),
            }}
          >
            <Image
              style={{ width: 189, height: 56 }}
              source={require("../img/logo.png")}
            />
          </Animated.View>

          <Animated.View
            style={{ opacity: this.state.logoText, marginTop: 20 }}
          >
            <Text style={styles.text}>
              <Text style={{ color: "#b90000" }}>Delivery. </Text>
              <Text style={{ color: "#e92d2d" }}>Made. </Text>
              <Text style={{ color: "#ef8f8f" }}>Easy.</Text>
            </Text>
          </Animated.View>
        </View>
        <View>{this.spinnerInitFunction()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    // margin: ,
  },

  text: {
    margin: 0,
    fontSize: 10,
    textAlign: "center",
    // textDecorationStyle: "dotted",
  },
  textinone: { color: "#e92d2d" },
});

AppRegistry.registerComponent("Splash", () => Splash);

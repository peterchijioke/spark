import React, { Component } from "react";
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Image,
  Animated,
} from "react-native";
import { Content, Spinner } from "native-base";

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
              style={{ width: 165, height: 56 }}
              source={require("../img/app_logo.png")}
            />
          </Animated.View>

          <Animated.View
            style={{ opacity: this.state.logoText, marginTop: 20 }}
          >
            <Text style={styles.text}>
              <Text style={styles.textinone}>Transport and Delivers </Text>
              like spark
            </Text>
          </Animated.View>
        </View>
        <Content>{this.spinnerInitFunction()}</Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333945",
  },
  logo: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },

  text: {
    color: "#f7a803",
    fontSize: 20,
    textAlign: "center",
    textDecorationStyle: "dotted",
  },
  textinone: { color: "#fff" },
});

AppRegistry.registerComponent("Splash", () => Splash);

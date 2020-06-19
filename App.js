import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import Splash from "./src/screens/Splash";
import PhoneNumberPage_signup from "./src/screens/PhoneNumberPage_signup";
import DeliveryMadeEasy_Screen from "./src/screens/DeliveryMadeEasy_Screen";
import Connect from "./src/screens/Connect";
import LoginPage from "./src/screens/LoginPage";
import UserDashboard from "./src/screens/UserDashboard";
import HomeScreen from "./src/screens/HomeScreen";
import DeliveryLocation from "./src/screens/DeliveryLocation";

export default class App extends Component {
  // async UNSAFE_componentWillMount() {
  //   await Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //   });
  // }

  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* start */}
          <Stack.Screen
            name="Delivery Location"
            component={DeliveryLocation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserDashboard"
            component={UserDashboard}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login Page"
            component={LoginPage}
            options={{
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              title: "Login With",
              // headerShown: false,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Connect"
            component={Connect}
            options={{
              headerStyle: {
                // elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              title: "Connect With",
              headerShown: false,

              headerTitleAlign: "center",
            }}
          />

          <Stack.Screen
            name="deliveryMadeEasy"
            component={DeliveryMadeEasy_Screen}
            options={{
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              title: "SPARK",
              headerShown: false,
              headerTitleAlign: "center",
            }}
          />

          <Stack.Screen
            name="PhoneNumberPage_signup"
            component={PhoneNumberPage_signup}
            options={{
              title: "Phone number verification",
              headerTitleAlign: "center",
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

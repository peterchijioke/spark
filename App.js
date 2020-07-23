import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "mobx-react";
import store from "./store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Splash from "./src/screens/Splash";
import PhoneNumberPage_signup from "./src/screens/PhoneNumberPage_signup";
import DeliveryMadeEasy_Screen from "./src/screens/DeliveryMadeEasy_Screen";
import Connect from "./src/screens/Connect";
import LoginPage from "./src/screens/LoginPage";
import UserDashboard from "./src/screens/UserDashboard";
import DeliveryLocation from "./src/screens/DeliveryLocation";
import MakeDeliveryRequest from "./src/screens/MakeDeliveryRequest";
import PickAcab from "./src/screens/PickAcab";
import { Root } from "popup-ui";
import { AppLoading } from "expo";


export default class App extends Component {
  state = { loading: true, appIsReady: false };
  async componentDidMount() {
    // // // Prevent native splash screen from autohiding
    // // try {
    // //   await SplashScreen.preventAutoHideAsync();
    // // } catch (e) {
    // //   console.warn(e);
    // // }
    // this.setState({ appIsReady: true });
  }

  /**
   * Method that serves to load resources and make API calls
   */

  UNSAFE_componentWillMount = async () => {
    try {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Regular: require("./assets/fonts/BrandonGrotesque-Regular.ttf"),
        light_italic: require("./assets/fonts/BrandonGrotesque-LightItalic.ttf"),
        m_2p: require("./assets/fonts/mplus-2p-thin.ttf"),
      });
      this.setState({ loading: false });
    } catch (error) {
      console.log("Error occured = " + error);
    }
  };

  render() {
    const Stack = createStackNavigator();

    if (this.state.loading) {
      return <AppLoading />;
    } else {
      return (
        <Root>
          <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator>
                {/* start */}
                <Stack.Screen
                  name="LoginPage"
                  component={LoginPage}
                  options={{ headerShown: false }}
                />

                <Stack.Screen
                  name="Connect"
                  component={Connect}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Home"
                  component={Splash}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Pick a cab"
                  component={PickAcab}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Make Request"
                  component={MakeDeliveryRequest}
                  options={{ headerShown: false }}
                />

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
          </Provider>
        </Root>
      );
    }
  }
}

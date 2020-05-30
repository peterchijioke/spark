import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerActivity from "./src/screens/DrawerActivity";
import Splash from "./src/screens/Splash";
import profileInfo from "./src/screens/ProfileInfo";
import profileSetUp from "./src/screens/profileSetUp";
import PhoneNumberPage_signup from "./src/screens/PhoneNumberPage_signup";
import DeliveryMadeEasy_Screen from "./src/screens/DeliveryMadeEasy_Screen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#4C4B4B",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="delivery Made Easy"
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
          name="profileInfo"
          component={profileInfo}
          options={{
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            title: "profile",
            // headerShown: false,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profileSetUp"
          component={profileSetUp}
          options={{
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            title: "Profile Setup",
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

        {/* <Stack.Screen
          name="DrawerActivity"
          component={DrawerActivity}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

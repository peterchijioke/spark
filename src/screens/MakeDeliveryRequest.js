import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
} from "react-native";
import GoogleMap from "./MakeRequestSubScreen/GoogleMap";
import CarChoice from "./MakeRequestSubScreen/CarChoice";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const MakeRequestPage = (props) => {
  StatusBar.setBarStyle("light-content");
  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor("#b90000");
    StatusBar.setTranslucent(true);
  }

  return (
    <React.Fragment>
      <View>
        {/* <HeaderGlobal /> */}
        <StatusBar />
        <View style={styles.container}>
          <GoogleMap />
        </View>
      </View>
      <View style={styles.carChoice}>
        <CarChoice />
      </View>
    </React.Fragment>
  );
};

export default MakeRequestPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    height: 500,
  },
  carChoice: {
    backgroundColor: "#b90000",
    height: HEIGHT - 500,
    marginBottom: 0,
  },
});

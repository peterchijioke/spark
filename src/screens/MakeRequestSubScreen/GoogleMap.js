import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { DestinationButton } from "./DestinationButton";
import { CurrentLocationButton } from "./CurrentLocationButton";

export default class GoogleMap extends Component {
  state = { region: null };

  UNSAFE_componentWillMount = () => {
    this._getLocationAcync();
  };
  _getLocationAcync = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync();
      // await Permissions.askAsync(Permissions.LOCATION);
      //
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({
        enabledHighAccurecy: true,
      });

      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        longitudeDelta: 0.045,
        latitudeDelta: 0.045,
      };
      this.setState({ region });
    } catch (e) {
      console.log("Error =" + e);
    }
  };
  render() {
    return (
      <View style={styles.mapView}>
        <DestinationButton />
        <CurrentLocationButton />
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          followsUserLocation={true}
          showsCompass={true}
          showsScale={true}
          showsBuildings={true}
          zoomTapEnabled={true}
          rotateEnabled={false}
          rotateEnabled={false}
          zoomEnabled={true}
          style={styles.map}
        ></MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    flex: 1,
    height: 200,
    // marginTop: ,
  },
});

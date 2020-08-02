import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert,
} from "react-native";
import MapView from "react-native-maps";
// import * as Permissions from "expo-permissions";
import AsyncStorage from "@react-native-community/async-storage";

import * as Location from "expo-location";
import CurrentLocationButton from "../MakeRequestSubScreen/CurrentLocationButton";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class GoogleMap extends Component {
  state = { region: null, statusState: null };

  componentDidMount = () => {
    this._getLocationAcync();
  };
  _getLocationAcync = async () => {
    const { setRegionInStore, locationInStore } = this.props.store;

    try {
      let { status } = await Location.getPermissionsAsync();
      // console.log(status);
      if (status === "granted") {
        // let location = await Location.getCurrentPositionAsync({
        //   enabledHighAccurecy: true,
        // });
        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
          // enabledHighAccurecy: true,
        });
        // console.log(location);

        let region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          longitudeDelta: 0.045,
          latitudeDelta: 0.045,
        };
        this.setState({ region });
        this.setState({ statusState: true });

        let userAddress = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        try {
          // setRegionInStore(region);
          let asynValue = JSON.stringify(userAddress);
          await AsyncStorage.setItem("address", asynValue);
        } catch (error) {
          console.log(error);
        }

        // console.log(locationInStore.region.latitude);
        // console.log(locationInStore.region.longitude);
      } else {
        Alert.alert("Permission to access location was denied");
      }
    } catch (e) {
      console.log("Error =" + e);
    }
  };

  centerMap = () => {
    const {
      latitude,
      longitude,
      longitudeDelta,
      latitudeDelta,
    } = this.state.region;

    this.map.animateToRegion({
      useNativeDriver: true,
      latitude,
      longitude,
      longitudeDelta,
      latitudeDelta,
    });
  };
  render() {
    return (
      <View style={styles.mapView}>
        {/* <DestinationButton /> */}
        <CurrentLocationButton
          st={this.state.statusState}
          cb={() => {
            this.centerMap();
          }}
        />
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          followsUserLocation={true}
          showsCompass={true}
          // showsScale={true}
          showsBuildings={true}
          zoomTapEnabled={true}
          rotateEnabled={false}
          rotateEnabled={false}
          zoomEnabled={true}
          ref={(map) => {
            this.map = map;
          }}
          style={styles.map}
        ></MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff",
    height: 350,
  },
  map: {
    flex: 1,
    height: 200,
    // marginTop: ,
  },
});

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Motocycle",
    ImageUir: require("../../img/manCarChoice.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Car",
    ImageUir: require("../../img/carChoiceP.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Bus",
    ImageUir: require("../../img/bus.png"),
  },
  {
    id: "58694a0f-3gts-471f-joy2-145571e29d72",
    ImageUir: require("../../img/truckChoice.png"),
    title: "Truck",
  },
];

const CarChoice = ({ navigation }) => {
  return (
    <React.Fragment>
      <View style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Image
                source={item.ImageUir}
                style={{
                  height: HEIGHT - 680,
                  width: WIDTH - 230,
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />

              <Text
                style={{ textAlign: "center", fontSize: 16, color: "#ccc" }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          // extraData={selected}
        />
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LogisticsBooking");
          }}
          style={styles.btn}
        >
          <Text style={{ fontSize: 20, color: "#b90000" }}>Make Request</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default CarChoice;
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    width: WIDTH - 250,
    height: HEIGHT - 630,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    marginTop: 10,
    backgroundColor: "#ffffff",
    elevation: 7,
    shadowRadius: 5,
    // shadowOpacity: 1.0,
    margin: 5,
  },
  btnView: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#ffffff",
    width: "70%",
    height: "50%",
    borderWidth: 1,
    borderColor: "#b90000",
    elevation: 7,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
});

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
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
} from "native-base";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Motocycle",
    ImageUir: require("../../img/manCarChoice.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Car",
    ImageUir: require("../../img/ca1.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Bus",
    ImageUir: require("../../img/truckCar.png"),
  },
  {
    id: "58694a0f-3gts-471f-joy2-145571e29d72",
    ImageUir: require("../../img/truckCar.png"),
    title: "Truck",
  },
];

const CarChoice = () => {
  return (
    <React.Fragment>
      <View>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <TouchableOpacity>
                <CardItem>
                  <Body>
                    <Image
                      source={item.ImageUir}
                      style={{ height: 50, width: 130 }}
                      resizeMode="cover"
                    />
                  </Body>
                </CardItem>
                <Text style={{ textAlign: "center", fontSize: 16 }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </Card>
          )}
          keyExtractor={(item) => item.id}
          // extraData={selected}
        />
      </View>
    </React.Fragment>
  );
};

export default CarChoice;
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: { width: WIDTH - 650, height: HEIGHT - 620 },
});

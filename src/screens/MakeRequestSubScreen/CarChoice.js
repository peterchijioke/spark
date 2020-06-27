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
    ImageUir: require("../../img/man.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    ImageUir: require("../../img/man.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    ImageUir: require("../../img/man.png"),
  },
  {
    id: "58694a0f-3gts-471f-joy2-145571e29d72",
    ImageUir: require("../../img/man.png"),
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
                      style={{ height: 60, width: 65 }}
                      resizeMode="cover"
                    />
                  </Body>
                </CardItem>
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

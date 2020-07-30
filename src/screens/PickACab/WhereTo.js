import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Picker,
} from "react-native";
import { Entypo } from "react-native-vector-icons";

const WIDTH = Dimensions.get("window").width;

export default class WhereTo extends Component {
  state = { itemValue: "Now" };
  render() {
    return (
      <View style={styles.Btn}>
        <TouchableOpacity
          style={styles.WhereToTextView}
          onPress={() => {
            this.props.navigation.navigate("pickupdestination");
          }}
        >
          <Entypo
            name="direction"
            size={22}
            color="#b90000"
            style={{ marginTop: 3, marginRight: 5 }}
          />

          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#b90000" }}>
            Set destination
          </Text>
        </TouchableOpacity>
        <View style={styles.pickerView}>
          <Picker
            selectedValue={this.state.itemValue}
            style={{
              height: 45,
              width: 100,
              color: "#b90000",
              borderRadius: 25,
            }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ itemValue }, () => {
                console.log(itemValue + "=" + itemIndex);
              })
            }
          >
            <Picker.Item label="Now" value="Now" />
            <Picker.Item label="Later" value="Later" />
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnView: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#123",
    height: Dimensions.get("window").height,
  },
  Btn: {
    zIndex: 9,
    width: WIDTH - 76,
    flexDirection: "row",
    height: 55,
    borderRadius: 28,
    backgroundColor: "#f1f1f1",
    justifyContent: "space-between",
    elevation: 7,
    shadowColor: "#b90000",
    shadowRadius: 5,
    shadowOpacity: 1.0,
    alignSelf: "center",
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: "#b90000",
  },
  pickerView: {
    backgroundColor: "#fff",
    borderRadius: 25,
    alignSelf: "flex-end",
    marginBottom: 5,
    marginRight: 5,
    borderColor: "#ccc",
    borderWidth: 0.5,
  },
  WhereToTextView: {
    // backgroundColor: "#b90000",
    width: WIDTH - 200,
    flexDirection: "row",
    justifyContent: "center",
    // marginLeft: ,
    alignItems: "center",
  },
});

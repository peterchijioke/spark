import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const WIDTH = Dimensions.get("window").width;

const componentDidMount = () => {
  // if the component is using the optional `value` prop, the parent
  // has the abililty to both set the initial value and also update it
  setTimeout(() => {
    this.setState({
      favColor: "red",
    });
  }, 1000);

  // parent can also update the `items` prop
  setTimeout(() => {
    this.setState({
      items: this.state.items.concat([{ value: "purple", label: "Purple" }]),
    });
  }, 2000);
};

const WhereTo = () => {
  const data = {
    favColor: undefined,
    items: [
      {
        label: "Red",
        value: "red",
      },
      {
        label: "Orange",
        value: "orange",
      },
      {
        label: "Blue",
        value: "blue",
      },
    ],
  };
  const inputRefs = {};
  return (
    <View style={{ flex: 1, backgroundColor: "#123" }}>
      <TouchableOpacity style={styles.Btn}>
        <View style={styles.leftCol}>
          <RNPickerSelect
            placeholder={{
              label: "Select a color...",
              // value: null,
            }}
            items={data.items}
            onValueChange={(value) => {
              setState({
                favColor: value,
              });
            }}
            onUpArrow={() => {
              inputRefs.name.focus();
            }}
            onDownArrow={() => {
              inputRefs.picker2.togglePicker();
            }}
            style={styles.input}
            value={data.favColor}
            ref={(el) => {
              inputRefs.picker = el;
            }}
            useNativeAndroidPickerStyle={false} //android only
            hideIcon={true}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WhereTo;

const styles = StyleSheet.create({
  btnView: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#123",
    height: Dimensions.get("window").height,
  },
  Btn: {
    zIndex: 9,
    width: WIDTH - 90,
    flexDirection: "row",
    height: 55,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    elevation: 7,
    // shadowColor:'#000000'
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  leftCol: { flex: 1, alignItems: "center" },
  centerCol: { flex: 4 },
  RightCol: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: "#ededed",
    width: "50%",
  },
  input: {
    width: 50,
    // fontSize: 16,
    // paddingTop: 13,
    // paddingHorizontal: 10,
    // paddingBottom: 12,
    // borderWidth: 1,
    // borderColor: "gray",
    // borderRadius: 4,
    // backgroundColor: "white",
    // color: "black",
  },
});

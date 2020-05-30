import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Button, Thumbnail } from "native-base";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}></Text>
        {/* <Thumbnail
          large
          source={require("../img/profile.jpg")}
          style={styles.topImg}
        /> */}

        {/* <Image source={require("../img/profile.jpg")} style={styles.topImg} /> */}
        <Button style={styles.btn} block light>
          <Text> Light </Text>
        </Button>
        <Button style={styles.btn} block primary>
          <Text> Primary </Text>
        </Button>
        <Button style={styles.btn} block success>
          <Text> Success </Text>
        </Button>
        <Button style={styles.btn} block info>
          <Text> Info </Text>
        </Button>
        <Button style={styles.btn} block info>
          <Text> Info </Text>
        </Button>
        <Button style={styles.btn} block info>
          <Text> Info </Text>
        </Button>
        <Button style={styles.btn} block warning>
          <Text> Warning </Text>
        </Button>
        <Button style={styles.btn} block danger>
          <Text> Danger </Text>
        </Button>
        <Button style={styles.btn} block dark>
          <Text> Dark </Text>
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginRight: 5,
  },
  text: { color: "#fff", marginTop: 5, marginLeft: 10 },
  topImg: { width: 140, height: 140, margin: 10, borderRadius: 70 },
  btn: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

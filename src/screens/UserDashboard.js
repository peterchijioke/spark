import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import {
  Drawer,
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Footer,
  Content,
} from "native-base";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import * as Font from "expo-font";
// import { AppLoading, Root } from "expo";
// import CardImge from "./sub_screen/CardImage";
// import FooterBadge from "./sub_screen/FooterBadge";
import SideBar from "./sub_screen/Side";
import { statusBarColor, stauBarColorDash } from "../screens/sub_screen/Colors";

export default class DrawerActivity extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <React.Fragment>
        <Drawer
          ref={(ref) => {
            this.drawer = ref;
          }}
          content={<SideBar navigator={this.navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <Container>
            <Header
              style={{ backgroundColor: "#f1f1f1" }}
              androidStatusBarColor={stauBarColorDash}
              iosBarStyle="dark-content"
            >
              <Left>
                <Button transparent onPress={this.openDrawer}>
                  <Icon name="menu" style={{ color: "#717171" }} />
                </Button>
              </Left>
              <Body>
                <Title
                  style={{ color: "#b90000", fontSize: 27, fontWeight: "bold" }}
                >
                  Spark
                </Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="camera" />
                </Button>
              </Right>
            </Header>

            {/* <FlatList
            data={[{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }]}
            renderItem={({ item }) => <CardImge />}
          /> */}
            {/* btn Area */}
            <View style={styles.btn_view}>
              <View style={styles.btn_inner}>
                <TouchableOpacity style={[styles.btn]}>
                  <View>
                    <Image
                      source={require("../img/manOnBick.jpeg")}
                      style={{ height: 90, width: 90 }}
                    />
                    {/* <Text>peter</Text> */}
                  </View>
                </TouchableOpacity>
              </View>
              {/*  */}
              <View style={styles.btn_inner}>
                <TouchableOpacity style={[styles.btn]}>
                  <View>
                    <Image
                      source={require("../img/girlBick.png")}
                      style={{ height: 90, width: 90 }}
                    />

                    {/* <Text>peter</Text> */}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Container>
          {/* text Area */}
          <Footer style={{ flexDirection: "column" }}>
            <Content>
              <Text>peter1</Text>
              <Text>peter2</Text>
              <Text>peter3</Text>
            </Content>
          </Footer>
          {/* <FooterBadge /> */}
        </Drawer>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  btn_view: {
    flexDirection: "row",
    backgroundColor: "#123",
    height: "45%",
    padding: 5,
    flexWrap: "wrap",
  },
  btn_inner: { width: "50%", height: "60%", padding: 5 },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
});

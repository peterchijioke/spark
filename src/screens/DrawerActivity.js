// import React, { Component } from "react";
// import { Text, View, StyleSheet, FlatList } from "react-native";
// import {
//   Drawer,
//   Container,
//   Header,
//   Left,
//   Body,
//   Right,
//   Button,
//   Icon,
//   Title,
//   Item,
// } from "native-base";

// import * as Font from "expo-font";
// import CardImge from "./sub_screen/CardImage";
// import FooterBadge from "./sub_screen/FooterBadge";
// // import { Container, Text } from "native-base";
// import { Ionicons } from "@expo/vector-icons";
// import SideBar from "./sub_screen/Side";

// export default class DrawerActivity extends Component {
//   state = {};

//   closeDrawer = () => {
//     this.drawer._root.close();
//   };
//   Copy;
//   openDrawer = () => {
//     this.drawer._root.open();
//   };

//   render() {
//     return (
//       <Drawer
//         ref={(ref) => {
//           this.drawer = ref;
//         }}
//         content={<SideBar navigator={this.navigator} />}
//         onClose={() => this.closeDrawer()}
//       >
//         <Container style={{}}>
//           <Header style={{ backgroundColor: "#f7a803" }}>
//             <Left>
//               <Button transparent onPress={this.openDrawer}>
//                 <Icon name="menu" />
//               </Button>
//             </Left>
//             <Body>
//               <Title>Home</Title>
//             </Body>
//             <Right>
//               <Button transparent>
//                 <Icon name="camera" />
//               </Button>
//             </Right>
//           </Header>
//           <FlatList
//             data={[{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }]}
//             renderItem={({ item }) => <CardImge />}
//           />
//         </Container>
//         <FooterBadge />
//       </Drawer>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

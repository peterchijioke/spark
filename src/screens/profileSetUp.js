import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Footer, FooterTab } from "native-base";

const profileSetUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btnView}>
        <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 30 }}>
          Set up your profile
        </Text>
        <TouchableOpacity style={styles.btn_proceed}>
          <Text style={styles.btnTextEmail}>PROCEED WITH EMAIL</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 20 }}>
          ────────── Or ─────────
        </Text>
        <View style={styles.socialIcon}>
          <TouchableOpacity style={[styles.btn_proceed, styles.F]}>
            <FontAwesome
              name="facebook"
              size={30}
              style={styles.facebookIcon}
            />
            <Text style={[styles.btnTextEmail, styles.textCol]}>
              Proceed with facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn_proceed, styles.F]}>
            <MaterialCommunityIcons
              name="google"
              size={30}
              style={styles.googlIcon}
            />
            <Text style={[styles.btnTextEmail, styles.textCol]}>
              Proceed with google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginLeft: 18,
          marginRight: 18,
          marginTop: "10%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Text style={{ fontSize: 15, textAlign: "center" }}>
            If you sign up ,
            <Text
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "#333945",
                marginRight: 5,
              }}
            >
              Terms & condition and privacy policy
            </Text>
            will apply
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default profileSetUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    alignItems: "center",
  },
  btnView: {
    alignItems: "center",
    justifyContent: "center",
    // flexGrow: 1,
    marginTop: 30,
  },
  socialIcon: {
    marginTop: 20,
  },
  btn_proceed: {
    backgroundColor: "#333945",
    width: 300,
    height: 58,
    justifyContent: "center",
    borderRadius: 65,
    elevation: 3,
    padding: 5,
  },
  F: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  textCol: { color: "#ccc", fontSize: 17 },
  btnTextEmail: {
    color: "#fff",
    fontSize: 18,
    elevation: 3,
    fontWeight: "400",
    textAlign: "center",
  },
  googlIcon: { position: "absolute", right: 255, color: "#FF362E" },
  facebookIcon: { position: "absolute", right: 256, color: "#3C40C6" },
});

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import Buttons from "./Buttons";

const IntroductionScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200, marginTop: 70, marginBottom: 30 }}
        source={require("../../assets/Logo.png")}
      />
      <View style={styles.btncontainer}>
        <Buttons btnName={"Employee Portal"} btnPath={"/"} />
      </View>
      <View style={styles.btncontainer}>
        <Buttons btnName={"Client Portal"} btnPath={"/"} />
      </View>
      <View style={styles.btncontainer}>
        <Buttons btnName={"Student Portal"} btnPath={"/login"} />
      </View>
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F4F5F9",
    width: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  btncontainer: {
    width: "100%",
    marginVertical: 18,
    alignItems: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import IntroductionScreen from "./src/components/IntroductionScreen";
import HomeScreen from "./src/student/screens/HomeScreen";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IntroductionScreen />
        <HomeScreen />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F4F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

const data = [
  {
    id: "123",
    title: "My Training",
    image:
      "https://cdn4.iconfinder.com/data/icons/lined-business-people/48/a-02-256.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Upload Documents",
    image:
      "https://cdn3.iconfinder.com/data/icons/office-productivity-and-communication/400/Productivity-33-256.png",
    screen: "EatScreen",
  },
  {
    id: "163",
    title: "Get a ride",
    image:
      "https://cdn1.iconfinder.com/data/icons/a-b-testing/500/ab-test-method-comparing_10-256.png",
    screen: "MapScreen",
  },
  {
    id: "466",
    title: "Order Food",
    image:
      "https://cdn4.iconfinder.com/data/icons/resolutions/32/resolution-05-256.png",
    screen: "EatScreen",
  },
  {
    id: "723",
    title: "Get a ride",
    image:
      "https://cdn2.iconfinder.com/data/icons/workplace/512/Calendar-256.png",
    screen: "MapScreen",
  },
  {
    id: "476",
    title: "Order Food",
    image:
      "https://cdn0.iconfinder.com/data/icons/real-estate-and-homes-2/85/map_location_pin_marker-128.png",
    screen: "EatScreen",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>Welcome Back</Text>
      <Text style={styles.textName}>Akshdeep Singh Jammu</Text>
      <FlatList
        style={{ marginVertical: 20 }}
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.verticalListObjectContainer}>
            <View
              style={{
                borderRadius: 50,
                backgroundColor: "#fff",
                shadowColor: "#BA0913",
                shadowOpacity: 0.6,
                shadowOffset: { width: 2, height: 4 },
                shadowRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                style={{
                  width: 90,
                  height: 90,
                  resizeMode: "contain",
                  borderRadius: 50,
                  margin: 4,
                }}
                source={{
                  uri: item.image,
                }}
              />
            </View>
            <Text style={styles.textTop}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <Text style={{ alignItems: "flex-start" }}>To-do</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff000",
    alignItems: "center",
    justifyContent: "center",
  },
  textTop: {
    fontSize: 14,
    marginTop: 25,
    color: "#2A2B2F",
  },
  textName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2A2B2F",
  },
  verticalListObjectContainer: {
    marginHorizontal: 10,
    maxWidth: 120,
  },
});

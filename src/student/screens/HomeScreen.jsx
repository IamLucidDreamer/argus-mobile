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
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
  {
    id: "163",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "466",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
  {
    id: "723",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "476",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>Welcome Back</Text>
      <Text style={styles.textName}>Name Here</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.verticalListContainer}>
            <Image
              style={{
                width: 110,
                height: 110,
                resizeMode: "contain",
              }}
              source={{
                uri: item.image,
              }}
            />
            <Text style={styles.textTop}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <Text>To-do</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textTop: {
    marginTop: 25,
    color: "#2A2B2F",
  },
  textName: {
    fontSize: 33,
    fontWeight: "bold",
    color: "#2A2B2F",
  },
  verticalListContainer: {
    marginVertical: 10,
  },
});

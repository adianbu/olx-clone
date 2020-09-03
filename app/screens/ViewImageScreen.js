import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    // backgroundColor: "#FF4500",
    // width: 50,
    // height: 50,
    position: "absolute",
    top: 50,
    left: 20,
  },
  deleteIcon: {
    // backgroundColor: "#32CD32",
    // width: 50,
    // height: 50,
    position: "absolute",
    top: 50,
    right: 20,
  },
});

export default ViewImageScreen;

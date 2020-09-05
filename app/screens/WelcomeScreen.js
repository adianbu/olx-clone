import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.incontainer}>
      <ImageBackground
        blurRadius={7}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <AppText style={styles.tagline}>Sell what you dont need</AppText>
        </View>
        {/* <View style={styles.view1} /> */}
        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate(routes.LOGIN)}
            color="secondary"
          />
          <AppButton
            title="Register"
            color="primary"
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>

        {/* <View style={styles.view2} /> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  incontainer: {
    flex: 1,
    justifyContent: "center",
  },
  tagline: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 20,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 90,
    alignItems: "center",
  },

  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },

  view1: {
    backgroundColor: "#FF4500",
    width: "100%",
    height: 48,
  },
  view2: {
    backgroundColor: "#32CD32",
    width: "100%",
    height: 48,
  },
});

export default WelcomeScreen;

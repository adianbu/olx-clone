import React from "react";
import {Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";

const Button = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginTop: 10,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    textTransform: "uppercase",
  },
});

export default Button;

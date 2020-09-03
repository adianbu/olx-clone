import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <View>
      <Text style={[defaultStyles.text, style]} {...otherProps}>
        {children}
      </Text>
    </View>
  );
};

export default AppText;

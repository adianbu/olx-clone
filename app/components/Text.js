import React from "react";
import { View, Text} from "react-native";

import defaultStyles from "../config/styles";

const Text = ({ children, style, ...otherProps }) => {
  return (
    <View>
      <Text style={[defaultStyles.text, style]} {...otherProps}>
        {children}
      </Text>
    </View>
  );
};

export default Text;

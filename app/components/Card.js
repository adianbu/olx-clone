import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import Apptext from "./AppText";

const Card = ({ title, subtitle, imageUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <Image source={{ uri: imageUrl }} />
        <Apptext numberOfLines={1}>{title}</Apptext>
        <Apptext numberOfLines={2}>{subtitle}</Apptext>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

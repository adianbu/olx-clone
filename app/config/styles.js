import colors from "./colors";
import { Platform } from "react-native";

export default {
  textInput: {
    fontsize: 18,
    color: colors.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  colors,
};

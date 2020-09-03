import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import AppText from "../components/AppText";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
// import LottieView from "lottie-react-native";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            width={200}
            color={colors.primary}
            progress={progress}
          />
        ) : (
          {
            /* <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            style={styles.animation}
            source={require("../assets/Animations/done.json")}
          /> */
          }
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const LoginScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().max(4).label("Password"),
  });

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.image} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={() => console.log("Submitted!!!")}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          icon="email"
          placeholder="Email"
          textContentType="email-Address" //works only for ios
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          name="password"
          icon="lock"
          placeholder="Password"
          textContentType="password" //works only for ios
        />

        {/* <AppButton title="Login" onPress={handleSubmit} /> */}
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../config/Screen";
// import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
// import ErrorMessage from "../components/ErrorMessage";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

//commented because we can import from index.js directly
// import AppFormField from "../components/forms/AppFormField";
// import SubmitButton from "../components/forms/SubmitButton";
// import AppForm from "../components/forms/AppForm";

const LoginScreen = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

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
        {/* { handleChange, handleSubmit, errors, setFieldTouched, touched } */}
        {/* <AppInputText
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              icon="email"
              placeholder="Email"
              textContentType="email-Address" //works only for ios
            />
            <AppText>
              <ErrorMessage error={errors.email} visible={touched.email} />
            </AppText> */}

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
        <SubmitButton title="Login" />
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

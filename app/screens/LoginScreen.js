import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../config/Screen";
// import AppInputText from "../components/AppInputText";

// import ErrorMessage from "../components/ErrorMessage";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import auth from "../api/auth";

import useAuth from "../auth/useAuth";

//commented because we can import from index.js directly
// import AppFormField from "../components/forms/AppFormField";
// import SubmitButton from "../components/forms/SubmitButton";
// import AppForm from "../components/forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  // const authContext = useContext(AuthContext);

  const { logIn } = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await auth.login(email, password);
    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);

    //below code transfered to login func in useAuth.js

    // const user = JwtDecode(result.data);
    // authContext.setUser(user);
    // storage.storeToken(result.data);

    logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.image} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
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
        <ErrorMessage error="Invalid email or password" visible={loginFailed} />
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

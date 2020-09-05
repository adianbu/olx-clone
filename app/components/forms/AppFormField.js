import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import AppInputText from "../AppInputText";
import ErrorMessage from "./ErrorMessage";
import AppText from "../AppText";

const AppFormField = ({ name, width, ...otherProps }) => {
  //so that form resets
  // const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  const {
    values,
    setFieldValue,
    errors,
    setFieldTouched,
    touched,
  } = useFormikContext();

  return (
    <>
      <AppInputText
        onBlur={() => setFieldTouched(name)}
        // onChangeText={handleChange(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        values={values[name]}
        width={width}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext;
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;

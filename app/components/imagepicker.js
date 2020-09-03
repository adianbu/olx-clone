import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageInputList from "./ImageInputList";

const imagepicker = () => {
  const [imageUris, setImageUris] = useState();

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imguri) => imguri !== uri));
  };

  return (
    <View>
      <Button title="Select image" onPress={selectImage} />
      <ImageInputList
        imageUris={imageUris}
        onAddImage={(uri) => handleAdd(uri)}
        onRemoveImage={(uri) => handleRemove(uri)}
      />
    </View>
  );
};

export default imagepicker;

const styles = StyleSheet.create({});

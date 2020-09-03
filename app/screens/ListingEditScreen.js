import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import ListingApi from "../api/listing";
import AppPicker from "../components/AppPicker";
import Picker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import ImageInputList from "../components/ImageInputList";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select atleast one image"),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Password"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "red", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "red", icon: "lock" },
];

const ListEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, resetForm) => {
    setProgress(0); //resetting progress to 0
    setUploadVisible(true);
    const result = await ListingApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    // setUploadVisible(false);

    if (!result.ok) {
      //to wait for the animation to finish
      setUploadVisible(false);

      return alert("Could not save");
    }
    resetForm();
    // alert("Success");
  };
  return (
    <Screen>
      <UploadScreen
        onDone={setUploadVisible(false)}
        visible={uploadVisible}
        progress={progress}
      />
      <AppForm
        initialValues={{
          image: null,
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit} //here
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxlength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxlength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxlength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListEditScreen;

const styles = StyleSheet.create({});

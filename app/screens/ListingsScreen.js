import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import ListingApi from "../api/listing";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: "100",
    image: require("../assets/logo-red.png"),
  },
];

const ListingsScreen = ({ navigation }) => {
  // const [listings, setListings] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const { request: loadListings, data: listings, error, loading } = useApi(
    ListingApi.getlistings
  );

  useEffect(() => {
    return loadListings();
  }, []);

  // const loadListings = async () => {
  //   setLoading(true);
  //   const response = await ListingApi.getlistings();
  //   setLoading(false);

  //   if (!response.ok) return setError(true);

  //   setError(false);
  //   setListings = response.data;
  // };
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text> Network Error</Text>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />

      <FlatList
        style={{ flex: 1 }}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => (navigation.navigate("ListingDetails"), item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import ListingApi from "../api/listing";
import Screen from "../config/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";

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

  const getListingsApi = useApi(ListingApi.getListings);

  useEffect(() => {
    return getListingsApi.request();
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
      {getListingsApi.error && (
        <>
          <Text> Network Error</Text>
          <AppButton title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />

      <FlatList
        style={{ flex: 1 }}
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => (navigation.navigate(routes.LISTING_DETAILS), item)}
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

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <View>
      <Image source={listing.image} />
      <View style={styles.detailsContainer}>
        <Apptext style={styles.title}>{listing.title}</Apptext>
        <Apptext style={styles.price}>${listing.price}</Apptext>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/background.jpg")}
            title="Adi"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;

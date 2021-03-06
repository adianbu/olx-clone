import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigation = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    {/* modal is for down to up screen transition */}
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}    
    />
  </Stack.Navigator>
);

export default FeedNavigation;

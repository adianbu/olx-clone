import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingsScreen from "../screens/ListingsScreen";
import ListEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigation from "./FeedNavigation";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigation}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;

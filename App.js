import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Icon from "./app/components/Icon";
import colors from "./app/config/colors";
import ListItem from "./app/components/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListEditScreen from "./app/screens/ListingEditScreen";
import AuthNavigation from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

const Link = () => {
  const navigate = useNavigation();

  return <Button title="Press" onPress={() => navigate.navigate("page2")} />;
};
const Main = ({ navigation }) => (
  <Screen>
    <Text>hey</Text>
    <Link />
    <Button
      title="Press"
      onPress={() => navigation.navigate("page2", { id: 1 })}
    />
  </Screen>
);

const page2 = ({ route }) => (
  <Screen>
    <Text>{route.params.id}</Text>

    <Button title="Press" />
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen
      name="page2"
      component={page2}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

//i built
const ListingStack = () => (
  <Stack.Navigator initialRouteName="Listing Details Screen">
    <Stack.Screen name="Listing Screen" component={ListingsScreen} />
    <Stack.Screen
      name="Listing Details Screen"
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

const MainTab = () => (
  <Tab.Navigator>
    <Tab.Screen component={ListingStack} />
    <Tab.Screen component={ListEditScreen} />
    <Tab.Screen component={AccountScreen} />
  </Tab.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="feed"
      component={feed}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const feed = () => (
  <Screen>
    <Text>hey</Text>
  </Screen>
);

export default function App() {
  return (
    // <NavigationContainer theme={navigationTheme}>
    //   {/* <StackNavigator /> */}
    //   {/* <TabNavigator /> */}
    //   <AuthNavigation />
    // </NavigationContainer>

    // <SafeAreaView style={styles.container}>
    //   {/* <Icon name="email" backgroundColor={colors.danger} /> */}
    //   {/* <AccountScreen /> */}
    <MessagesScreen />
    //   <ListingsScreen />
    //   {/* <WelcomeScreen /> */}
    //   {/* not tested onPress */}
    //   {/* <AppButton title="Login" onPress={() => console.log("pressed")} /> */}
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightblue',
    justifyContent: "center",
    alignContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  // view1: {
  //   backgroundColor: "#FF4500",
  //   width: "100%",
  //   height: 48,
  // },
  // view2: {
  //   backgroundColor: "#00FF00",
  //   width: "100%",
  //   height: 48,
  // },
});

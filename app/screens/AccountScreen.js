import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../config/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigation/routes";

const menu = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundcolor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundcolor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

const AccountScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Adi"
          subTitle="adithya@gmail.com"
          image={require("../assets/icon.png")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menu}
          keyExtractor={(item) => item.title}
          //   ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

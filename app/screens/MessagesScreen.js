import React, { useState } from "react";
import {
  StyleSheet,
  
  View,
  FlatList,

} from "react-native";

import Constants from "expo-constants";

import ListItem from "../components/lists/ListItem";
import Screen from "../config/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "t1",
    description: "d1",
    image: require("../assets/logo-red.png"),
  },
  {
    id: 2,
    title: "t2",
    description: "d2",
    image: require("../assets/chair.jpg"),
  },
];
const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item) => {
    //delete message
    setMessages(messages.filter((message) => message.id != item.id));
  };

  //call server};
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        // keyExtractor is like key in react n it needs to return string
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "t2",
              description: "d2",
              image: require("../assets/chair.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: Constants.statusBarHeight,
  },
});

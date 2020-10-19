import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";


import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
import logger from "./app/utility/logger";

logger.start();

// const Link = () => {
//   const navigate = useNavigation();

//   return <Button title="Press" onPress={() => navigate.navigate("page2")} />;
// };
// const Main = ({ navigation }) => (
//   <Screen>
//     <Text>hey</Text>
//     <Link />
//     <Button
//       title="Press"
//       onPress={() => navigation.navigate("page2", { id: 1 })}
//     />
//   </Screen>
// );

// const page2 = ({ route }) => (
//   <Screen>
//     <Text>{route.params.id}</Text>

//     <Button title="Press" />
//   </Screen>
// );

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Main" component={Main} />
//     <Stack.Screen
//       name="page2"
//       component={page2}
//       options={({ route }) => ({ title: route.params.id })}
//     />
//   </Stack.Navigator>
// );

export default function App() {
// logger.log(new Error("Error in app"))

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(initialState);
  // useEffect(() => {
  //   restoreToken();
  // }, []);

  //restoreToken on refresh

  // const restoreToken = async () => {
  //   const token = await authStorage.getToken();
  //   if (!token) return;
  //   setUser(jwtDecode(token));
  // };

  //restoreUser decodes it in storage itself instead of doing it in auth
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );
  //onfinish gets raised when startasync gets done
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef}  theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>

    // <SafeAreaView style={styles.container}>
    //   {/* <Icon name="email" backgroundColor={colors.danger} /> */}
    //   {/* <AccountScreen /> */}
    // <MessagesScreen />
    //   <ListingsScreen />
    //   {/* <WelcomeScreen /> */}
    //   {/* not tested onPress */}
    //   {/* <AppButton title="Login" onPress={() => console.log("pressed")} /> */}
    // </SafeAreaView>
  );
}



import * as SecureStore from "expo-secure-store";
import JwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token");
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token");
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? JwtDecode(token) : null;
};

const removeToken = async () => {
  try {
     await SecureStore.deleteItemAsync();
  } catch (error) {
    console.log("Error removing the auth token", error);

  }
};

// export default { removeToken, storeToken, getToken };
export default { removeToken, storeToken, getUser };

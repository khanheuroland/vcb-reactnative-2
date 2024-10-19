import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import FormIkEx from "./FormIkEx";

const Stack = createNativeStackNavigator();

export default NivigationEx = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Login} options={{title: "Trang Chủ"}}/>
        <Stack.Screen name="FormIkEx" component={FormIkEx} options={{title: "Đăng Nhập", headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

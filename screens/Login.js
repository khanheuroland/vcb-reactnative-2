import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import MyInput from "../components/MyInput";

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  textInputContainer:{
    width: '100%',
    marginVertical: 5
  },
  textInput: {
    borderColor: "#EEE",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    borderRadius: 6,
  }
})

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <View
      style={styles.container}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login Header</Text>

      {/* <View style={styles.textInputContainer}>
        <Text>Username</Text>
        <TextInput
          style={[styles.textInput]}
          ref={usernameRef}
          value={username}
          onChangeText={(value) => setUserName(value)}
          keyboardType="email-address"
        />
      </View> */}
      <MyInput value="" label="Username" keyboardType="email-address" setValue={setUserName}/>

      {/* <View style={styles.textInputContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          ref={passwordRef}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View> */}
      <MyInput value="" label="Password" secureTextEntry={true} setValue={setPassword}/>

      {/* <View style={styles.textInputContainer}>
        <Text>Phone</Text>
        <TextInput
          style={styles.textInput}
          ref={passwordRef}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          keyboardType="phone-pad"
        />
      </View> */}
      <MyInput label="Phone number" value="0924448868" keyboardType="phone-pad" setValue={setPhone}/>

      <View style={{ width: "100%", paddingTop: 20 }}>
        <Button
          title="Login"
          onPress={() => {
            alert(`Login info: ${username}/${password}`);
          }}
        />
      </View>
    </View>
  );
};

export default Login;

import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  textInputContainer:{
    width: '100%'
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
  const [username, setUserName] = useState("txk2691@live.com");
  const [password, setPassword] = useState("");
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  
  return (
    <View
      style={styles.container}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login Header</Text>

      <View style={styles.textInputContainer}>
        <Text>Username</Text>
        <TextInput
          style={[styles.textInput, {color:'red'}]}
          ref={usernameRef}
          value={username}
          onChangeText={(value) => setUserName(value)}
        />
      </View>

      <View style={styles.textInputContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          ref={passwordRef}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

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

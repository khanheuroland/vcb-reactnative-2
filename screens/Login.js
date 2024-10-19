import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import MyInput from "../components/MyInput";
import globalStyle from "../common/globalStyle";

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
  },
  text: {
    color: 'yellow'
  }
})

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);

  return (
    <View
      style={styles.container}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login Header</Text>

      <MyInput value="" label="Username" keyboardType="email-address" valueRef={usernameRef}/>
      <MyInput value="" label="Password" secureTextEntry={true} valueRef={passwordRef}/>
      <MyInput label="Phone number" value="" keyboardType="phone-pad" valueRef={phoneRef}/>

      <View style={{ width: "100%", paddingTop: 20 }}>
        <Button
          title="Login"
          onPress={() => {
            alert(`Login info: ${usernameRef.current}/${passwordRef.current}`);
          }}
          color="red"
        />

        <TouchableOpacity 
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 200,
          backgroundColor: 'black'
        }}
        onPress={()=>alert('You have just clicked on button')}>
          <View style={{backgroundColor: 'green'}}>
            <Text style={[globalStyle.text, styles.text]}>This is title</Text>
          </View>
          <View style={{backgroundColor: 'yellow'}}>
            <Text>This is detail</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

import React, { useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";
import MyInput from "../components/MyInput";
const FormIkEx = () => {
  useEffect(() => {
    console.log("Loaded");
  });
  return (
    <Formik
      initialValues={{ userName: "khanh.tx@live.com", password: "ABC1234", phone: "0924448868" }}
      onSubmit={(values) => {
        alert(`User Info: ${values.userName}, ${values.password}, ${values.phone}`)
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <>
          <View style={{ marginVertical: 40 }}>
            <Text>Username</Text>
            <TextInput
              placeholder="Username"
              onChangeText={handleChange("userName")}
              value={values.userName}
            ></TextInput>
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              placeholder="Password"
              onChangeText={handleChange("password")}
              value={values.password}
            />
          </View>

          <View>
            <Text>Phone</Text>
            <TextInput
              placeholder="Phone"
              onChangeText={handleChange("phone")}
              value={values.phone}
            />
          </View>
          <View>
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        </>
      )}
    </Formik>
  );
};

export default FormIkEx;

import React, { useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const loginFormValidationSchema = yup.object().shape({
  userName: yup
    .string()
    .email("Please enter valid email")
    .required("Username is required"),
  password: yup
    .string()
    .min(10, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  phone: yup.string()
    .matches(/[0][0-9]{9}/, "Phone number is not valid")
    .required("Phone is required")
});

const FormIkEx = () => {
  useEffect(() => {
    console.log("Loaded");
  });
  return (
    <View style={{ marginTop: 100, padding: 15 }}>
      <Formik
        initialValues={{ userName: "", password: "", phone: "" }}
        validationSchema={loginFormValidationSchema}
        onSubmit={(values) => {
          alert(
            `User Info: ${values.userName}, ${values.password}, ${values.phone}`
          );
        }}
      >
        {({ handleChange, handleSubmit, handleReset, values, errors }) => (
          <>
            <View>
              <Text>Username</Text>
              <TextInput
                placeholder="Username"
                onChangeText={handleChange("userName")}
                value={values.userName}
              ></TextInput>
              {errors.userName && <Text style={{color: 'red'}}>{errors.userName}</Text>}
            </View>

            <View>
              <Text>Password</Text>
              <TextInput
                placeholder="Password"
                onChangeText={handleChange("password")}
                value={values.password}
              />
              {errors.password && <Text style={{color: 'red'}}>{errors.password}</Text>}
            </View>

            <View>
              <Text>Phone</Text>
              <TextInput
                placeholder="Phone"
                onChangeText={handleChange("phone")}
                value={values.phone}
              />
              {errors.phone && <Text style={{color: 'red'}}>{errors.phone}</Text>}
            </View>
            <View>
              <Button onPress={handleSubmit} title="Submit" />
              <Button onPress={handleReset} title="Reset" color="red" />
            </View>
          </>
        )}
      </Formik>

      <View style={{marginTop: 20}}>
        <Button title="Valid Object" onPress={()=>{
            var obj = {
              userName: "khanh.tx@live.com",
              password: "1234567890",
              phone: "0924448888"
            }

            loginFormValidationSchema.validate(obj)
            .then((value)=>{
              console.log(value)
            })
            .catch((err)=>{
              console.log(err)
            })
        }}></Button>
      </View>
    </View>
  );
};

export default FormIkEx;

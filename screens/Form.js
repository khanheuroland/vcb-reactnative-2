import React, { useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';

const Form = () => {
	const SignupSchema = Yup.object().shape({
		lastName: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
	});

	useEffect(()=>{
		console.log('Loaded')
	})
  return (
    <Formik
      initialValues={{ email: "khanh.tx@live.com" }}
			validationSchema={SignupSchema}
      onSubmit={(values) => {
				console.log(values);
			}}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={{marginVertical: 40}}>
          <Text>Your Email:</Text>
          <TextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
					{errors.email && <Text>{errors.email}</Text>}
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default Form;

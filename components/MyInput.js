import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const MyInput = ({value, label, valueRef,...props}) => {
  const styles = StyleSheet.create({
    textInputContainer: {
      width: "100%",
      marginVertical: 5,
    },
		textInput: {
			borderColor: "#EEE",
			borderStyle: "solid",
			borderWidth: 1,
			padding: 5,
			borderRadius: 6,
		}
  });

	const [text, setText] = useState(value)
	useEffect(()=>{
		valueRef.current=text;
		//valueRef(text);
		console.log(`render ${label}`)
	})
  return (
    <View style={styles.textInputContainer}>
      <Text>{label}</Text>
      <TextInput
        style={[styles.textInput]}
        value={text}
        onChangeText={(val) => setText(val)}
        {...props}
      />
    </View>
  );
};

export default MyInput;

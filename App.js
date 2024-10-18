import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Hello, { XinChao } from "./components/Hello";
import Counter from "./components/Counter";
import Bodem from "./components/Bodem";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parrentCount: 100, // Biến đếm
    };
  }

  updateCounter = (value) => {
    this.setState({
      parrentCount: value,
    });
  };

  sayHello = (name) => {
    alert(`Xin chao ${name} den voi React Native`);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.parrentCount}</Text>
        <Text>Hello world!</Text>
        <XinChao ten="BIDV" chinhanh="Hanoi" />
        <StatusBar style="auto" />
        <Counter value={50} updateCounter={this.updateCounter} />

        <Bodem
          name="VCB"
          chinhanh="Hanoi"
          diachi="So1 tran quan khai"
          sayHello={this.sayHello}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

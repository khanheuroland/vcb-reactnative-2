import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Biến đếm
    };
  }
  render() {
    return (
      <View>
        <Button
          title="Up"
          onPress={() => {
            this.setState({
              count: this.state.count+1
            })
          }}
        />
        <Text>{this.state.count}</Text>
        <Button title="Down" onPress={()=>{
           this.setState({
            count: this.state.count-1
          })
        }}/>
      </View>
    );
  }
}

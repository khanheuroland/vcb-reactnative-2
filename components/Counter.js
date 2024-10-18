import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.value, // Biến đếm
    };
  }

  upHandler = () => {
    this.props.updateCounter(this.state.count+1);

    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount(){
    console.log('Counter did mount')
  }

  componentDidUpdate(){
    console.log('Counter updated!')
  }

  componentWillUnmount(){
    console.log('Counter unmounted!')
  }

  downHandler = () => {
    //Check if count >0 then --
    if (this.state.count > 0) {
      this.props.updateCounter(this.state.count-1);

      this.setState({
        count: this.state.count - 1,
      });
      
    }
  };

  render() {
    return (
      <View>
        <Button title="Up" onPress={this.upHandler} />
        <Text>{this.state.count}</Text>
        <Button title="Down" onPress={this.downHandler} />
      </View>
    );
  }
}

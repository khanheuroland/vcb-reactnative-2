import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Hello extends Component {

  render() {
    return (
      <View>
        <Text>Hello {this.props.ten}, Welcome to iPMac!</Text>
      </View>
    )
  }
}

export class XinChao extends Component {
  
  render() {
    return (
      <View>
        <Text>Xin chao {this.props.ten} {this.props.chinhanh} den voi React Native</Text>
        <Hello ten={this.props.ten}/>
      </View>
    )
  }
}

//rafc = react arrow function component
import React from 'react'
import { View, Text, Button } from 'react-native'

const Bodem = ({name, chinhanh, sayHello, ...props}) => {
  return (
    <View>
      <Text>Hello {name} {chinhanh}. I am bodem</Text>
      <Text>Dia chi: {props.diachi}</Text>

      <Button title='Say Hello' onPress={()=>sayHello('VCB Team')}/>
    </View>
  )
}

export default Bodem


//rafc = react arrow function component
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const Bodem = ({ name, chinhanh, sayHello, ...props }) => {
  const [count, setCount] = useState(10);
  const [person, setPerson]= useState({name: "Khanh Tran", email: "khanh.tx@Live.com"});

  const upHandle=()=>{
    setCount(count+1);
  }
  const downHanle=()=>{
    setCount(count-1);
  }

  const updatePerson=()=>{
    setPerson({name: 'Up', email: person.email})
  }

  useEffect(()=>{
    if(count<0)
    {
      setCount(0);
      alert('count can\'t be negative');
    }
  },[count])

  return (
    <View>
      <Text>
        Hello {name} {chinhanh}. I am bodem
      </Text>
      <Text>Dia chi: {props.diachi}</Text>

      <Button title="Say Hello" onPress={() => sayHello("VCB Team")} />
    
      <Button title="Up" onPress={upHandle}></Button>
      <Text>{count}</Text>
      <Button title="Down" onPress={downHanle}></Button>

      <Text>{person.name} - {person.email}</Text>
      <Button title="update Person" onPress={updatePerson}></Button>
    </View>
  );
};

export default Bodem;

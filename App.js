import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Hello, { XinChao } from "./components/Hello";
import Counter from "./components/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <XinChao ten="BIDV" chinhanh="Hanoi"/>
      <StatusBar style="auto" />
      <Counter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

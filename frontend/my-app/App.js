import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React , {useState} from 'react';
export default function App() {
  const [data , setdata] = useState("")
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>heyy my first app.</Text>
      <input placeholder='Enter data' onChange={(event) => setdata(event.target.value)} />
      <Text>{data}</Text>
      {/* <Button></Button> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { Button, StyleSheet, Text, View } from 'react-native';
import React , {useState} from 'react';
export default function App() {
  const [data , setdata] = useState("")
=======
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  
  const [text, setText] = useState('');

  const handleInputChange = (newText) => {
    setText(newText);
  };

  const handleButtonPress = async () => {
    // Do something with the entered text
    console.log('Entered text:', text);

    try {
      // Replace 'http://your-backend-api-url' with the actual URL of your backend API
      const response = await axios.post('http://127.0.0.1:3000/sendData', text);
      
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }

  };

>>>>>>> 276598b5e9a99014b67f906b513e668033d955f6
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>heyy my first app.</Text>
<<<<<<< HEAD
      <input placeholder='Enter data' onChange={(event) => setdata(event.target.value)} />
      <Text>{data}</Text>
      {/* <Button></Button> */}
=======
      <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1, padding: 10 }}
        multiline
        numberOfLines={4} // You can set the number of lines you want to display initially
        placeholder="Type here..."
        value={text}
        onChangeText={handleInputChange}
      />
      <Button title="Submit" onPress={handleButtonPress} />
      {/*<input placeholder='Enter data' onChange={(event) => setText(event.target.value)} />*/}
      <Text>{text}</Text>
>>>>>>> 276598b5e9a99014b67f906b513e668033d955f6
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

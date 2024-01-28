import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [text, setText] = useState('');

  const handleInputChange = (newText) => {
    setText(newText);
  };

  const handleButtonPress = async () => {
    console.log('Entered text:', text);

    try {
      const response = await axios.post('http://127.0.0.1:3000/sendData', { data: text });
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hey, my first app.</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
        placeholder="Type here..."
        value={text}
        onChangeText={handleInputChange}
      />
      <Button title="Submit" onPress={handleButtonPress} />
      <Text>{text}</Text>
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

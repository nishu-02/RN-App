import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://192.168.1.4:8000/Mach1/')
      // .then((response) => response.text()) // When returning a Httpresponse it is used
      .then((response) => response.json()) // When returning a JSON it is used in the views.py (parse the response as the JSON)
      .then((jsondata) => setData(jsondata)) //set the fetch data to the state
      .catch((error) => console.error('Error:', error)); // Catch any errors
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>{data.message}</Text>
        <Text>{data.name}</Text>
        <Image source={{ uri: data.image }} style={styles.image} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'beige',
  },
  image:{
    width: 200,
    height:200,
    
  }
});

export default App;

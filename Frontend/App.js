import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://192.168.154.220:8000/Mach1/')
      .then((response) => response.json())
      .then((jsondata) => {
        console.log(jsondata);
        setData(jsondata);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <View>
          <Text>{data.message || 'No message available'}</Text>
          <Text>{data.name || 'No name available'}</Text>
          {data.image ? (
            <Image source={{ uri: data.image }} style={styles.image} />
          ) : (
            <Text>No image available</Text>
          )}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;

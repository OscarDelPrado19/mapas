import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

 Peticion = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://192.168.111.50:8080/api/gastromanager/usuario/')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.mainContainer}>
<View style={styles.container}>
  {data && data.data && (
    <>
      <Text>{`Usuario: ${data.data.user}`}</Text>
      <Text>{`Password: ${data.data.password}`}</Text>
    </>
  )}
  <Text>Soy una petición a un servidor.</Text>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#f5f5f5', 
    padding: 20, 
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 5, 
  },
});

export default Peticion;
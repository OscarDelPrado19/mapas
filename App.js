import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator}  from "@react-navigation/stack";
import Splash from "./screens/splash";
import Login from "./screens/login";
import BottomTab from "./screens/bottomtab";
import { StyleSheet, View, Dimensions } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker  } from 'react-native-maps';
import React, {useState } from 'react';

App = () =>{
  const [selectedCoordinates, setSelectedCoordinates] = useState([]);

  const handleMapPress = (event) => {
    setSelectedCoordinates([...selectedCoordinates, event.nativeEvent.coordinate]);
  };
    return(
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 18.85242559072094, 
          longitude: -99.20016544153134,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        mapType="standard"
        onLongPress={handleMapPress}
      >
        {selectedCoordinates.map((coordinate, index) => (
          <Marker key={index} title={`Aqui estoy número  ${index + 1}`} coordinate={coordinate} />
        ))}
      </MapView>
    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;
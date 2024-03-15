import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/themed';
import LottieView from 'lottie-react-native';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';



const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() =>{
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={style.container}>
      <Image style ={style.imageLogo} source={require('../assets/Gunter.png')}/>

      <LottieView source={
        require('../assets/pingu.json')}
        autoPlay={true}
        loop={true}
        style={style.loadingAnimation}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Territorio de calidad</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  loadingAnimation:{
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 150,
  },
  imageLogo:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 100,
    borderWidth: 2, 
    borderColor: '#00C89A',
  }
});

export default Splash;
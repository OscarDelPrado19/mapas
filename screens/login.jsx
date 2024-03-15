import { useNavigation } from '@react-navigation/native';
import { Card, Image, Button } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { Backend } from '../config/backendconfig';


const Login = () => {

    const navigation = useNavigation();

    let [user, setUser] = useState('');
    let [password, setPassword] = useState('');

    const {url} = Backend();


    let intentos = 0;

    const checkUser = async () => {
        try {
            const payload = {user: user, password: password };
            console.log(payload);
            const response = await fetch(url + "/usuario/login",{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload),
  
            })
            console.log('Response:', response); // Agrega esta línea para imprimir la respuesta del servidor
            if(response.ok && response.status === 200){
                const data = await response.json();
  
           
                // AsyncStorage.removeItem("userLogged");
                console.log(data);
                Alert.alert(`Bienvenido!`,undefined,[
                    {
                        text: 'Gracias', onPress: () => navigation.replace('BottomTab')
                    }
                ])
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Hubo un problema al intentar iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    }

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>Iniciar sesión</Card.Title>
                <Card.Divider />
                <Image
                    style={styles.circulo}
                    source={{
                        uri: 'https://frikipolis.com/wp-content/uploads/2022/09/halcon-milenario-1200x675.jpg'
                    }} />
                <TextInput
                    value={user}
                    onChangeText={setUser}
                    style={styles.texto}
                    placeholder='Usuario' />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.texto}
                    placeholder='Contraseña' />
                <Button
                    title={'Iniciar sesión'}
                    color={'#2eb9e7'}
                    onPress={checkUser} />

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    circulo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        margin: 20
    },
    texto: {
        fontSize: 15,
        margin: 20
    }
})

export default Login;
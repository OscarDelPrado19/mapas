import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Posts from "./peticion";
import { AntDesign } from '@expo/vector-icons';

const tab = createBottomTabNavigator();
const BottomTab = () => {
    return(

            <tab.Navigator initialRouteName="Peticion">
                

                {/* <tab.Screen name="Products" component={Products} options={{tabBarShowLabel: false, headerShown: false, tabBarActiveTintColor: '#089779',
                tabBarInactiveTintColor: '#002e60',
                tabBarLabelStyle:{fontSize:13},
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="cart" color={color} size={30}/>
                )
                }}/> */}


                <tab.Screen name="Peticion" component={Peticion} options={{tabBarShowLabel: false, headerShown: false, tabBarActiveTintColor: '#2eb9e7',
                tabBarInactiveTintColor: '#002e60',
                tabBarLabelStyle:{fontSize:13},
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={30}/>
                )
                }}/>



            </tab.Navigator>

    )
}

export default BottomTab;
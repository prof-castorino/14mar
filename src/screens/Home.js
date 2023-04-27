import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Calculadora } from "./Calculadora"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export const HomeScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Inicio') {
                            iconName = focused ? 'airplane' : 'airplane-outline'
                        }
                        if (route.name === 'Calculadora') {
                            iconName = focused ? 'calculator' : 'calculator-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',


                })}
            >
                <Tab.Screen name="Inicio" component={Home} />
                <Tab.Screen name="Calculadora" component={Calculadora} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const Home = () => {
    return (<View><Text>teste</Text></View>)
}
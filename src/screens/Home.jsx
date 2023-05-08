import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Calculadora } from './Calculadora'
import { Ionicons } from '@expo/vector-icons'
import Lottie from 'lottie-react-native';

export default function Animation() {
    const animationProgress = useRef(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
    }, [])
    return (
        <Lottie
            style={{ width: '100%', height: 400 }}
            source={require("../../assets/organic-market.json")}
            progress={animationProgress.current}
            autoPlay={false}
        />
    );
}

const Tab = createBottomTabNavigator()

export const HomeScreen = () => {
    return (<NavigationContainer independent={true}>
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
                tabBarInactiveTintColor: 'gray'
            })}
        >
            <Tab.Screen name='Inicio' component={Home} />
            <Tab.Screen name='Calculadora' component={Calculadora} />
        </Tab.Navigator>
    </NavigationContainer >)
}

export const Home = () => {
    return (
        <View >
            <Animation />
        </View>
    )
}
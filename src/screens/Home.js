import { View, Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CalculatorScreen } from './Calculador';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        }
                        if (route.name === 'Calculadora') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}>
                <Tab.Screen name="Calculadora" component={CalculatorScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

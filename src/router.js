import React from 'react';
import { HomeScreen } from './screens/Home';
import { CalculatorScreen } from './screens/Calculador';
import { ProductsScreen } from './screens/Products';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

export const Router = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Calculadora de IMC"
          component={CalculatorScreen}
        />
        <Drawer.Screen
          name="Loja"
          component={ProductsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "./screens/Home";
import { ProductsScreen } from "./screens/Products";
import { Calculadora } from "./screens/Calculadora";


const Drawer = createDrawerNavigator();

export const Router = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Inicio"
                    component={HomeScreen}
                />
                <Drawer.Screen
                    name="Loja"
                    component={ProductsScreen}
                />
                <Drawer.Screen
                    name="Calculadora de IMC"
                    component={Calculadora}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
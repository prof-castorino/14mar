import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { ProductCard, ProductDetails } from "../components/Card/Product"
import { getProducts } from "../context/Products";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export const ProductsScreen = () => {
    return (<NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen name="Produtos" component={Products} options={{ title: "Escolha seu produto" }} />
            <Stack.Screen name="Detalhes" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>)
}


const Details = ({ navigation, route }) => {
    return (<ProductDetails {...route.params} />)
}

const Products = ({ navigation }) => {
    const [getTotal, setTotal] = useState(0)
    const callbackAdd = (value) => {
        setTotal(getTotal + value)
    }
    const callbackRemove = (value) => {
        if (getTotal != 0) { setTotal(getTotal - value) }
    }
    const getProduct_ = getProducts()
    return (
        <View style={styles.centerView}>
            <ScrollView>
                {getProduct_.map(
                    (item) => <ProductCard
                        key={item.title}
                        {...item}
                        navigation={navigation}
                        callbackAdd={callbackAdd}
                        callbackRemove={callbackRemove}
                    />
                )}
            </ScrollView>
            <View style={styles.footer}>
                <Text><Text style={styles.bold}>Total R$</Text>{getTotal}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centerView: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22
    },
    bold: {
        fontWeight: 'bold'
    },
    footer: {
        width: '100%',
        backgroundColor: 'lightgreen',
        padding: 10,
    },
})
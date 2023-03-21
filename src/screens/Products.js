import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ProductCard } from "../components/Card/Product"

export const Products = () => {
    const [getTotal, setTotal] = useState(0)
    const callbackAdd = (value) => {
        setTotal(getTotal + value)
    }
    const callbackRemove = (value) => {
        if (getTotal != 0) { setTotal(getTotal - value) }
    }
    return (
        <View>
            <Text>Escolha seu produto</Text>
            <ScrollView>
                <ProductCard
                    title='Alface'
                    descrition='Unidade'
                    price={3}
                    img={require("../../assets/alface.jpg")}
                    callbackAdd={callbackAdd}
                    callbackRemove={callbackRemove}
                />
                <ProductCard
                    title='Cenoura'
                    descrition='o kilo'
                    price={7}
                    img={require("../../assets/cenouras.jpg")}
                    callbackAdd={callbackAdd}
                    callbackRemove={callbackRemove}
                />
                <ProductCard
                    title='Tomate'
                    descrition='o kilo'
                    price={10}
                    img={require("../../assets/tomates.jpg")}
                    callbackAdd={callbackAdd}
                    callbackRemove={callbackRemove}
                />
            </ScrollView>

            <Text><Text>R$</Text>{getTotal}</Text>
        </View>
    )
}

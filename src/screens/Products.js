import React, { useState } from "react"
import { Text, View, ScrollView, StyleSheet } from "react-native"
import { Product } from '../components/Card/Product'
import { getProducts } from "../context/Product/Products"
export const ProductsScreen = () => {
    const [getTotal, setTotal] = useState(0)
    const callBackAdd = (value) => {
        setTotal(getTotal + value)
    }
    const callBackRemove = (value) => {
        if (getTotal != 0) { setTotal(getTotal - value) }
    }
    const products = getProducts()
    return (
        <View>
            <Text>Escolha seu produto</Text>
            <ScrollView>
                {
                    products.map((item) =>
                        <Product
                            img={item.img}
                            title={item.title}
                            descrition={item.descrition}
                            price={item.price}
                            callBackAdd={callBackAdd}
                            callBackRemove={callBackRemove}
                        />
                    )
                }
            </ScrollView>
            <Text><Text style={styles.bold}>Total R$</Text>{getTotal}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
})

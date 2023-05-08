import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'


export const ProductDetails = props => {
    return (
        <View style={styles.details} >
            <Image style={styles.detailsImg} source={props.img} />

            <View style={[styles.info]}>
                <Text style={styles.title}>{props.title}</Text>
                <Text >{props.descrition}</Text>
                <Text >{props.descritionAll}</Text>
                <Text ><Text style={styles.bold}>R$</Text>{props.price}</Text>
            </View>
        </View>
    )
}

export const ProductCard = props => {
    const [getQtd, setQtd] = useState(0)
    const add = () => {
        props.callbackAdd(props.price)
        setQtd(getQtd + 1)
    }
    const remove = () => {
        if (getQtd != 0) {
            props.callbackRemove(props.price)
            setQtd(getQtd - 1)
        }
    }

    return (
        <View style={styles.card}>
            <View style={styles.square}>
                <Image style={styles.img} source={props.img} />
                <Text style={styles.details} onPress={() => {
                    props.navigation.navigate('Detalhes', { ...props })
                }}>Veja detalhes do produto</Text>
            </View>
            <View style={[styles.square, styles.info]}>
                <Text style={styles.title}>{props.title}</Text>
                <Text >{props.descrition}</Text>
                <Text ><Text style={styles.bold}>R$</Text>{props.price}</Text>
                <Text ><Text style={styles.bold}>Qtd</Text>{getQtd}</Text>
                <View style={styles.cardButton}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => { remove() }}
                    >
                        <Text style={styles.textStyle} >-</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => { add() }}
                    >
                        <Text style={styles.textStyle} >+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    details: {
        width: '100%',
        backgroundColor: "#ffffff",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22
    },
    detailsImg: {
        width: '100%',
    },
    cardButton: {
        flex: 2,
        flexDirection: "row"
    },
    card: {
        backgroundColor: "#ffffff",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,
        flexDirection: "row",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey'
    },
    square: { width: '50%' },
    details: {
        marginTop: -39,
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: 20,
        padding: 10
    },
    img: {
        width: '100%',
        height: 190,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    info: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bold: {
        fontWeight: 'bold'
    },
    button: {
        width: '50%',
        borderRadius: 20,
        padding: 20,
        margin: 3,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

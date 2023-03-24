import React, { useState } from "react"
import { Image, View, Text, Pressable, StyleSheet } from "react-native"
export const Product = props => {
    const [getQtd, setQtd] = useState(0)
    const add = () => {
        setQtd(getQtd + 1)
        props.callBackAdd(props.price)
    }
    const remove = () => {
        if (getQtd != 0) {
            setQtd(getQtd - 1)
            props.callBackRemove(props.price)
        }
    }
    return (<View style={styles.card}>
        <View style={styles.square}>
            <Image style={styles.img} source={props.img} />
        </View>
        <View style={[styles.square, styles.info]}>
            <Text style={styles.title}>{props.title}</Text>
            <Text >{props.descrition}</Text>
            <Text ><Text style={styles.bold}>R$</Text>{props.price}</Text>
            <Text ><Text style={styles.bold}>Qtd.</Text>{getQtd}</Text>
            <View style={styles.buttons}>
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
    </View>)
}
const styles = StyleSheet.create({
    buttons: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,
        flexDirection: "row",
    },
    card: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,
        flexDirection: "row",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey'
    },
    square: {
        width: '50%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey'
    },
    bold: {
        fontWeight: 'bold',
    },
    info: {
        padding: 10
    },
    img: {
        width: '100%',
        height: 170,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    },
    button: {
        width: '50%',
        borderRadius: 20,
        padding: 10,
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
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})

import React from "react";
import {Modal, StyleSheet, Text, View, Pressable} from 'react-native'

export const ModalCustom = props => {
    return(
        <Modal 
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        >
            <View style={styles.centerView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{props.title}</Text>
                    <Text style={styles.modalText}>{props.descrition}</Text>
                    <Pressable 
                        style={[styles.button, styles.buttonClose]}  
                        onPress={()=>{props.modalCallBack(false)}}  
                    >
                        <Text style={styles.textStyle} >{props.txtbutton}</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    centerView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:22
    },
    modalText:{
        marginBottom:15,
        textAlign:'center'
    },
    button:{
        borderRadius:20,
        padding:10,
        elevation:2
    },
    buttonClose:{
        backgroundColor: '#2196F3',
    },
    textStyle:{
        color: 'white',
        fontWeight:'bold',
        textAlign:'center',
    },
    modalView:{
        margin:20,
        backgroundColor:'white',
        borderRadius: 20,
        padding:35,
        alignItems:'center',
        shadowColor: '#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation:5,
    }
})

import { View, StyleSheet } from "react-native"

export const NumberCustom = props =>{
    return(
        <View>
            <TextInput 
            keyboardType='numeric'
            style={!props.error? styles.txt : styles.error}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            defaultValue={props.item}
            onChangeText={txt => props.hasItem(txt)}
            />
            <Text style={styles.txtError}>{props.error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({   
    txt:{
      width: '100%',
      height: 40,
      borderWidth:1,
      borderColor:'gray'
    },
    error:{
      width: '100%',
      height: 40,
      borderWidth:1,
      borderColor:'red'
    },
    txtError:{
      color:'red'
    }
  });
  


import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function App() {
  const [errorAltura, SetErrorAltura] = useState('')
  const [errorPeso, SetErrorPeso] = useState('')

  const [altura, SetAltura] = useState('')
  const [peso, SetPeso] = useState('')

  const [result, SetResult] = useState('')
  const calc = ()=>{
    var imc = peso / (altura * altura)
    SetResult(imc)
  }

  const hasAltura = (txt) =>{
    SetAltura(txt)
    SetErrorAltura((isNaN(txt) || a >=3)? 'Digite um número valido':'')
  }
  const hasPeso = (txt) =>{
    SetAltura(txt)
    SetErrorAltura((isNaN(txt))? 'Digite um número valido':'')
  }

  return (
    <View style={styles.container}>
      <Text>Calculadora de IMC</Text>
      <TextInput 
      defaultValue={altura}
      onChangeText={txt => hasAltura(txt)}
      />
      <Text style={styles.txtError}>{errorAltura}</Text>
      <TextInput
      defaultValue={peso}
      onChangeText={txt => hasPeso(txt)}
      />
      <Text style={styles.txtError}>{errorPeso}</Text>
      <Button 
        onPress={()=>{ calc() }}
      />
      <Text>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtError:{
    color:'red'
  }
});

import React,{useState} from 'react';
import {NumberCustom} from './components/TextInput/Number'
import { Text, View, Button } from 'react-native';

export default function App() {
  const [errorAltura, SetErrorAltura] = useState('')
  const [errorPeso, SetErrorPeso] = useState('')

  const [altura, SetAltura] = useState('')
  const [peso, SetPeso] = useState('')

  const [result, SetResult] = useState('')
  const decorator = (imc) =>{
    if(imc < 16){ return 'Muito abaixo do peso'}
    if (imc < 17){ return 'Moderadamente abaixo do peso'}
    if (imc < 18.5){return 'Abaixo do peso'}
    if (imc < 25) {return 'Saudavel'}
    if (imc < 30) {return 'Sobrepeso'}
    if (imc < 35) {return 'Obesidade Grau 1°'}
    if (imc < 40) {return 'Obesidade Grau 2°'}
    return 'Obesidade Grau 3°'  
  }
  const calc = ()=>{
    var imc = peso / (altura * altura)
    SetResult(isNaN(imc)?'Digite um número valido': decorator(imc))
  }

  const hasAltura = (txt) =>{
    SetAltura(txt)
    SetErrorAltura((isNaN(txt) || a >=3)? 'Digite um número valido':'')
  }
  const hasPeso = (txt) =>{
    SetPeso(txt)
    SetErrorPeso((isNaN(txt))? 'Digite um número valido':'')
  }

  return (
    <View>
      <NumberCustom
      error={errorAltura}
      placeholder='Digite a sua altura'
      maxLength={4}
      item={altura}
      hasItem={hasAltura}
      />
      <NumberCustom
      error={errorPeso}
      placeholder='Digite a sua peso'
      maxLength={4}
      item={peso}
      hasItem={hasPeso}
      />
      <Button 
        onPress={()=>{ calc() }}
      />
      <Text>{result}</Text>
    </View>
  );
}


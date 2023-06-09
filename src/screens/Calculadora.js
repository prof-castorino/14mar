import React, { useState } from 'react';
import { NumberCustom } from '../components/TextInput/Number'
import { ModalCustom } from '../components/Modal/Modal'
import { View, Button, Text } from 'react-native';

export const Calculadora = () => {
  const [errorAltura, SetErrorAltura] = useState('')
  const [errorPeso, SetErrorPeso] = useState('')

  const [altura, SetAltura] = useState('')
  const [peso, SetPeso] = useState('')

  const [modalVisible, SetModalVisible] = useState(false)
  const [result, SetResult] = useState('')
  const decorator = (imc) => {
    if (imc < 16) { return 'Muito abaixo do peso' }
    if (imc < 17) { return 'Moderadamente abaixo do peso' }
    if (imc < 18.5) { return 'Abaixo do peso' }
    if (imc < 25) { return 'Saudavel' }
    if (imc < 30) { return 'Sobrepeso' }
    if (imc < 35) { return 'Obesidade Grau 1°' }
    if (imc < 40) { return 'Obesidade Grau 2°' }
    return 'Obesidade Grau 3°'
  }
  const calc = () => {
    var imc = peso / (altura * altura)
    SetResult(isNaN(imc) ? 'Digite um número valido' : decorator(imc))
    SetModalVisible(true)
  }

  const hasAltura = (txt) => {
    SetAltura(txt)
    SetErrorAltura((isNaN(txt) || txt >= 3) ? 'Digite um número valido' : '')
  }
  const hasPeso = (txt) => {
    SetPeso(txt)
    SetErrorPeso((isNaN(txt)) ? 'Digite um número valido' : '')
  }

  const modalCallBack = (visible) => { SetModalVisible(visible) }

  return (
    <View>
      <Text>Calculadora de IMC</Text>
      <ModalCustom
        title='Seu indice de massa corporal(IMC)'
        descrition={result}
        txtbutton='OK'
        modalVisible={modalVisible}
        modalCallBack={modalCallBack}
      />
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
        maxLength={3}
        item={peso}
        hasItem={hasPeso}
      />
      <Button
        title='Calcular'
        onPress={() => { calc() }}
      />
    </View>
  );
}


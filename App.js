import React from 'react';
import { Products } from './src/screens/Products'
import { Calculadora } from './src/screens/Calculadora'
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

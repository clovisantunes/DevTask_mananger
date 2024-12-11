import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountCreation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à tela de criação de contas!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default AccountCreation;

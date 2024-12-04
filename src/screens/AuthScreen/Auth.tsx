import React, { useState } from 'react';
import { TextInput, Button, Text, View } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ navigation }: any) => { // Desestruturando navigation de props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensagem de erro

  const handleLogin = async () => {
    try {
      const authInstance = getAuth();
      await signInWithEmailAndPassword(authInstance, email, password);
      navigation.navigate('Home'); 
    } catch (error: any) {
      console.error('Erro ao logar:', error.message);
      setErrorMessage('Usuário ou senha incorretos');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      
      {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
    </View>
  );
};

export default Login;

import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_KEY = 'user_uid';

export const useAuthContext = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const saveUidToLocalStorage = async (uid: string) => {
    try {
      await AsyncStorage.setItem(AUTH_KEY, uid);
      console.log('UID salvo localmente com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar UID localmente:', error);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const authInstance = getAuth();
      const userCredential = await signInWithEmailAndPassword(authInstance, email, password);

      const uid = userCredential.user.uid; 
      await saveUidToLocalStorage(uid); 

      setErrorMessage('');
      return true;
    } catch (error: any) {
      console.error('Erro ao logar:', error.message);
      setErrorMessage('Usuário ou senha incorretos');
      return false;
    }
  };

  return {
    login,
    errorMessage,
  };
};

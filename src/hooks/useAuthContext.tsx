import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const useAuthContext = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const authInstance = getAuth();
      await signInWithEmailAndPassword(authInstance, email, password);
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

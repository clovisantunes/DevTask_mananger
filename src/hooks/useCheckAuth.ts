import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../App';

type UseCheckAuthProps = {
  navigation: {
    navigate: (route: string, params?: any) => void;
  };
};

export const useCheckAuth = ({ navigation }: UseCheckAuthProps) => {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const uid = await AsyncStorage.getItem('user_uid');
        if (uid) {
          console.log('UID encontrado localmente:', uid);

          const userDocRef = doc(db, 'users', uid);
          const userSnapshot = await getDoc(userDocRef);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            console.log('Dados do usuário recuperados:', userData);

            navigation.navigate('Home', { userName: userData.name });
          } else {
            console.warn('Usuário não encontrado no Firestore.');
          }
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação e buscar dados do usuário:', error);
      }
    };

    checkAuth();
  }, [navigation]);
};

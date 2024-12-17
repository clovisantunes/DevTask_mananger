import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordConfirmation,
} from '../screens/AccountCreation/utils/Validation';

type CreateContextProps = {
  navigation: {
    navigate: (route: string) => void;
  };
};

export const useCreateContext = async (
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  { navigation }: CreateContextProps
) => {
  const nameError = validateName(name);
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);
  const confirmationError = validatePasswordConfirmation(password, passwordConfirmation);

  if (nameError) return setError(nameError);
  if (emailError) return setError(emailError);
  if (passwordError) return setError(passwordError);
  if (confirmationError) return setError(confirmationError);

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, {
      displayName: name,
    });

    const userRef = doc(db, 'users', userCredential.user.uid);
    await setDoc(userRef, {
      uid: userCredential.user.uid,
      name: name,
      email: email,
      createdAt: new Date(),
    });

    await AsyncStorage.setItem('user_uid', userCredential.user.uid);
    console.log('UID salvo localmente:', userCredential.user.uid);

    console.log('Conta criada com sucesso e dados armazenados no Firestore!');
    navigation.navigate('Home');
  } catch (error: any) {
    console.error('Erro ao criar conta:', error.message);
    setError('Erro ao criar conta. Tente novamente.');
  }
};

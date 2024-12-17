import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { firebaseConfig } from './api/firebase';
import { initializeApp } from 'firebase/app';
import useNavigation from './navigation/appNavigator';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const App = () => {
  return (
    <NavigationContainer>
      {useNavigation()}
    </NavigationContainer>
  );
};

export default App;


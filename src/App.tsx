import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { firebaseConfig } from './api/firebase';
import { initializeApp } from 'firebase/app';
import useNavigation from './navigation/appNavigator';

const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <NavigationContainer>
      {useNavigation()}
    </NavigationContainer>
  );
};

export default App;


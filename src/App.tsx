import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebaseConfig } from './api/firebase';
import Auth from './screens/AuthScreen/Auth';
import Home from './screens/Home/Home';
import { initializeApp } from 'firebase/app';


const app = initializeApp(firebaseConfig);
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}  // Tela de autenticação
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={Home} // Tela após a autenticação (ex: tela principal)
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


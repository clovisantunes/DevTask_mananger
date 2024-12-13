import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../screens/AuthScreen';
import Home from '../screens/Home';
import PassRecovery from '../screens/PassRecovery';
import AccountCreation from '../screens/AccountCreation';


const Stack = createStackNavigator();


const useNavigation = () => {
    return( 
        <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="PasswordRecovery"
          component={PassRecovery}
          options={{ title: 'Recuperar sua senha' }}
        />
        <Stack.Screen
          name="AccountCreation"
          component={AccountCreation}
          options={{
            title: '',
            headerBackTitle: '',
            headerStyle: {
              backgroundColor: '#7c73e3', 
              elevation: 0, 
              shadowOpacity: 0, 
              borderBottomWidth: 0,
           
            },
            headerTintColor: 'white', 
          }}
        />
      </Stack.Navigator>
    )
}

export default useNavigation;
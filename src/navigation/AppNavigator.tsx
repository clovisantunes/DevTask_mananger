import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../screens/AuthScreen/Auth';
import Home from '../screens/Home/Home';
import PassRecovery from '../screens/PassRecovery/PassRecovery';


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
      </Stack.Navigator>
    )
}

export default useNavigation;
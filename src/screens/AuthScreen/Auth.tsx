import React, {useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {
  FullScreenContainer,
  CenteredContainer,
  TextError,
} from '../../styles/global_styles';
import {
  LoginInput,
  LoginCard,
  LoginButton,
  ButtonText,
  LoginText,
  LoginImage,
  PassText,
} from './styles';
import {useAuthContext} from '../../hooks/useAuthContext';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, errorMessage} = useAuthContext();

  const screenWidth = Dimensions.get('window').width;
  const threeFourthsWidth = (screenWidth * 3) / 4;

  const handleLogin = async () => {
    const isSuccess = await login(email, password);
    if (isSuccess) {
      navigation.navigate('Home');
    }
  };
  const handlePasswordRecovery = () => {
    navigation.navigate('PasswordRecovery');
  };

  return (
    <FullScreenContainer>
      <CenteredContainer>
        <LoginImage
          source={require('../../assets/loginImage.png')}
          style={{width: '100%', height: 200, resizeMode: 'contain'}}
        />
      </CenteredContainer>
      <CenteredContainer width={`${threeFourthsWidth}px`}>
        <LoginText>Login</LoginText>
        <LoginInput placeholder="Email" value={email} onChangeText={setEmail} />
        <LoginInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handlePasswordRecovery}>
          <PassText>Esqueceu sua senha?</PassText>
        </TouchableOpacity>
        <LoginCard>
          <LoginButton onPress={handleLogin}>
            <ButtonText>Login</ButtonText>
          </LoginButton>
        </LoginCard>
        {errorMessage ? <TextError>{errorMessage}</TextError> : null}
      </CenteredContainer>
    </FullScreenContainer>
  );
};

export default Login;

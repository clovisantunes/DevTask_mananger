import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../styles/theme';
import { FullScreenContainer, CenteredContainer, TextError } from '../../styles/global_styles';
import { LoginCard, LoginText, LoginImage, PassText, TouchCard, CenteredImage } from './styles';
import { useAuthContext } from '../../hooks/useAuthContext';
import CustomInput from '../../components/Input/CustomInput';
import CustomButton from '../../components/Button/CustomButton';
import texts from '../../utils/texts.json';

type LoginProps = {
  navigation: {
    navigate: (route: string) => void;
  };
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, errorMessage } = useAuthContext();

  const handleLogin = async () => {
    const isSuccess = await login(email, password);
    if (isSuccess) {
      navigation.navigate('Home');
    }
  };
  const handlePasswordRecovery = () => {
    navigation.navigate('PasswordRecovery');
  };
  const handleCreateAccount = () => {
    navigation.navigate('AccountCreation');
  };

  return (
    <ThemeProvider theme={theme}>
      <FullScreenContainer>
        <CenteredImage>
          <LoginImage
            source={require('../../assets/loginImage.png')}
            style={{ resizeMode: 'contain' }}
          />
        </CenteredImage>
        <CenteredContainer width={`${(Dimensions.get('window').width * 3) / 4}px`} >
          <LoginText>{texts.login.title}</LoginText>
          <CustomInput
            placeholder={texts.login.emailPlaceholder}
            value={email}
            onChangeText={setEmail}
          />
          <CustomInput
            placeholder={texts.login.passwordPlaceholder}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchCard>
            <TouchableOpacity onPress={handlePasswordRecovery}>
              <PassText>{texts.login.forgotPassword}</PassText>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount}>
              <PassText>{texts.login.createAccount}</PassText>
            </TouchableOpacity>
          </TouchCard>
          <LoginCard>
            <CustomButton onPress={handleLogin}>{texts.login.loginButton}</CustomButton>
          </LoginCard>
          {errorMessage ? <TextError>{errorMessage}</TextError> : null}
        </CenteredContainer>
      </FullScreenContainer>
    </ThemeProvider>
  );
};

export default Login;

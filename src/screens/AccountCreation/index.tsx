import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../../styles/theme';
import text from '../../utils/texts.json';
import {
  BackgroundContainer,
  CenterdAbsoluteContainer,
  CenteredContainer,
  FullScreenContainer,
} from '../../styles/global_styles';
import {MainText, RegisterContainer, SubText} from './styles';
import CustomInput from '../../components/Input/CustomInput';
import {useAuthContext} from '../../hooks/useAuthContext';

const AccountCreation = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [ login , errorMessage] = useState();

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer backgroundColor='#e4e7ea'>
      <RegisterContainer>
        <MainText>{text.AccountCreation.creationMessage}</MainText>
        <SubText>{text.AccountCreation.creationSubText}</SubText>
      </RegisterContainer>
      <FullScreenContainer > 
        <CenterdAbsoluteContainer
          padding="24px"
          top="-140px"
          borderRadius="24px">
          <CustomInput
            placeholder={text.login.namePlaceholder}
            value={name}
            onChangeText={setName}
          />
          <CustomInput
            placeholder={text.login.emailPlaceholder}
            value={email}
            onChangeText={setEmail}
          />
          <CustomInput
            placeholder={text.login.passwordPlaceholder}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </CenterdAbsoluteContainer>
      </FullScreenContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default AccountCreation;

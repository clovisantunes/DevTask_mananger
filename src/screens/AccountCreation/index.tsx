import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components/native';
import auth from '@react-native-firebase/auth';
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
import CustomButton from '../../components/Button/CustomButton';
import {useCreateContext} from '../../contexts/useCreateContext';
import Icon from 'react-native-vector-icons/AntDesign';
import Pass from 'react-native-vector-icons/MaterialIcons';

type AccountCreationProps = {
  navigation: {
    navigate: (route: string) => void;
  };
};

const AccountCreation = ({navigation}: AccountCreationProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    useCreateContext(name, email, password, passwordConfirmation, setError, {navigation});
  };


 
  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer backgroundColor="#e4e7ea">
        <RegisterContainer>
          <MainText>{text.AccountCreation.creationMessage}</MainText>
          <SubText>{text.AccountCreation.creationSubText}</SubText>
        </RegisterContainer>
        <FullScreenContainer backgroundColor="#e4e7ea">
          <CenterdAbsoluteContainer
            padding="24px"
            top="-140px"
            borderRadius="24px"
            backgroundColor="white">
            <CustomInput
              placeholder={text.login.namePlaceholder}
              value={name}
              onChangeText={setName}
              icon={<Icon name="user" size={20} color="#007bff" />}
            />
            <CustomInput
              placeholder={text.login.emailPlaceholder}
              value={email}
              onChangeText={setEmail}
              icon={<Icon name="mail" size={20} color="#007bff" />}
            />
            <CustomInput
              placeholder={text.login.passwordPlaceholder}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              icon={<Icon name="lock" size={20} color="#007bff" />}
            />
            <CustomInput
              placeholder={text.login.passWordConfirmationPlaceholder}
              secureTextEntry
              value={passwordConfirmation}
              onChangeText={setPasswordConfirmation}
              icon={<Pass name="lock" size={20} color="#007bff" />}
            />
            {error && <SubText style={{color: 'red'}}>{error}</SubText>}
            <CustomButton
              children={text.AccountCreation.createAccount}
              onPress={handleSubmit}
            />
            <CenteredContainer>
             
            </CenteredContainer>
          </CenterdAbsoluteContainer>
        </FullScreenContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default AccountCreation;

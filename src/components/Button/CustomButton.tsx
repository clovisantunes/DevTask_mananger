import React, { ReactNode } from 'react';
import { ButtonText, LoginButton } from './style';

interface CustomButtonProps {
  onPress: () => void;
  children: ReactNode;
}

const CustomButton = ({ onPress, children }: CustomButtonProps) => (
    <LoginButton onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </LoginButton>
  );

  export default CustomButton;
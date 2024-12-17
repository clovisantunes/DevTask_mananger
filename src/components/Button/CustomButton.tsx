import React, { ReactNode } from 'react';
import { ButtonText, GenericButton } from './style';

interface CustomButtonProps {
  onPress: () => void;
  children: ReactNode;
}

const CustomButton = ({ onPress, children }: CustomButtonProps) => (
    <GenericButton onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </GenericButton>
  );

export default CustomButton;

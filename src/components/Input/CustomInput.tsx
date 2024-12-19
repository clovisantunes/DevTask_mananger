import React from 'react';
import { LoginInputContainer, StyledIcon, LoginInput } from './styles';

interface CustomInputProps {
  placeholder: string;
  icon?: JSX.Element;
  [key: string]: any;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  icon,
  ...props
}) => (
  <LoginInputContainer>
    {icon && <StyledIcon>{icon}</StyledIcon>}
    <LoginInput
      placeholder={placeholder}
      {...props}
      style={{ paddingLeft: icon ? 40 : undefined }} 
    />
  </LoginInputContainer>
);

export default CustomInput;

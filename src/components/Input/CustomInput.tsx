import React from 'react';
import { LoginInput } from './styles';

interface CustomInputProps {
  placeholder: string;
  [key: string]: any;
}

const CustomInput: React.FC<CustomInputProps> = ({placeholder, ...props}) => (
    <LoginInput placeholder={placeholder} {...props} />
  );


  export default CustomInput;
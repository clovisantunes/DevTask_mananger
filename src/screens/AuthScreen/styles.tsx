import { Text } from "react-native";
import styled from "styled-components/native";

export const LoginInput = styled.TextInput`
    width: 100%;
    font-size: 16px;
    padding: 16px;
    border: 3px solid #eaebff;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const LoginCard = styled.View`
    width: 100%;
    margin-top: 2em;
    display: flex;
    align-items: center;
`;

export const LoginButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px; 
    justify-content: center;
    align-items: center;
    background-color: #626594;
    border-radius: 8px;
    margin-top: 20px;
`;

export const ButtonText = styled(Text)`
    color: white;
    font-size: 24px;
`;
export const LoginText = styled(Text)`
    font-size: 36px;
    margin-bottom: 20px;
    font-weight: 800;
    color: #626594;
`
export const LoginImage = styled.Image`
    min-width: 100%;
    min-height: 100%;
    resize: cover;
`
export const PassText = styled.Text`
     color: #0261f0;
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
  text-align: center;
`
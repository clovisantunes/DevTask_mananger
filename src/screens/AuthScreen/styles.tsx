import { Dimensions, Text } from "react-native";
import styled from "styled-components/native";


export const LoginCard = styled.View`
    width: 100%;
    margin-top: 2em;
    display: flex;
    align-items: center;
`;


export const LoginText = styled(Text)`
    font-size: 36px;
    margin-bottom: 20px;
    font-weight: 800;
    color: #626594;
`
export const LoginImage = styled.Image`
    max-width: 100%;
    min-height: 100%;
`
export const PassText = styled.Text`
     color: #0261f0;
    font-size: 14px;
    font-weight: bold;
    margin-top: 8px;
    text-align: center;
`;
const screenWidth = Dimensions.get('window').width;

export const TouchCard = styled.View`
    display: flex;
    flex-direction: row;
    width: ${screenWidth * 0.7}px;
    justify-content: space-between;
`
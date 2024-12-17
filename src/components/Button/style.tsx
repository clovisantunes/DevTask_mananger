import { Text } from "react-native";
import styled from "styled-components/native";

export const GenericButton = styled.TouchableOpacity`
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
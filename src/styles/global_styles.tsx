import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const FullScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

interface CenteredContainerProps {
  width?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
}

export const CenteredContainer = styled.View<CenteredContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '80%'};
  align-self: center;
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
  padding: ${({ padding }) => padding || '0px'};
`;

export const TextError = styled.Text`
  color: #ff4d4d;
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
  text-align: center;
  background-color: #ffe6e6;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ff4d4d;
`;
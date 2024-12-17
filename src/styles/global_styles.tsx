import { SafeAreaView } from 'react-native-safe-area-context';

interface FullscreenContainerProps {
  backgroundColor?: string;
}

interface CenteredContainerProps {
  width?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  top?: string
}
export const FullScreenContainer = styled.View<FullscreenContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, backgroundColor }) => theme.colors.background ? theme.colors.background : backgroundColor};
`;

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

interface BackgroundContainerProps{
  backgroundColor?: string;
}

export const BackgroundContainer = styled.View<BackgroundContainerProps>`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`
export const CenteredContainer = styled.View<CenteredContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '80%'};
  align-self: center;
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.background};
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
  padding: ${({ padding }) => padding || '0px'};
 
  
`;
export const CenterdAbsoluteContainer = styled.View<CenteredContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '90%'};
  height: auto;
  align-self: center;
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.background};
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
  padding: ${({ padding }) => padding || '0px'};
  position: absolute;
  top: ${({ top }) => top || '0px'};
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing.small};
  text-align: center;
  background-color: #ffe6e6;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.error};
`;

import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const LoginCard = styled.View`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: flex;
  align-items: center;
`;

export const LoginText = styled.Text`
  font-size: ${screenWidth > 400 ? '36px' : '24px'};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const LoginImage = styled.Image`
  max-width: 100%;
  min-height: 100%;
`;

export const PassText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing.small};
  text-align: center;
`;

export const TouchCard = styled.View`
  display: flex;
  flex-direction: row;
  width: ${screenWidth * 0.7}px;
  justify-content: space-between;
`;

import { createGlobalStyle } from 'styled-components';
import Navbar from './Navbar';

export const lightTheme = {
    bodyBg: '#f5f5f5',
    headerBg: '#1976d2',
    titleColor: '#000',
    buttonBg: '#860138',
    buttonColor: '#fff',
    buttonHoverBg: '#666',
    inputBorder: '#ccc',
    inputBorderFocus: '#1976d2',
    navbarBg: '#ffffff',
  };
  
  export const darkTheme = {
    bodyBg: '#121212',
    headerBg: '#333',
    titleColor: '#fff',
    buttonBg: '#860138',
    buttonColor: '#fff',
    buttonHoverBg: '#666',
    inputBorder: '#555',
    inputBorderFocus: '#fff',
    navbarBg: '#860138',
  };
  
  export const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${({ theme }) => theme.bodyBg};
      color: ${({ theme }) => theme.titleColor};
      transition: background-color 0.3s, color 0.3s;
    }
  `;
  
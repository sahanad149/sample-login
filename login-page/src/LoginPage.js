import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Box, CssBaseline, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { GlobalStyles, lightTheme, darkTheme } from './Theme';
import Navbar from './Navbar';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <CssBaseline />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Container
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          paddingTop: 8, // To offset the navbar height
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          textAlign="center"
          padding={2}
          fontWeight={600}
        >
          Welcome to the Games Room Dashboard
        </Typography>
        <LoginForm />
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;

import React from 'react';
import { AppBar, Toolbar, Typography, Switch } from '@mui/material';
import { useTheme } from 'styled-components';
import logo from './csu-lsu.png'; // Add your logo image here

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const theme = useTheme();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.navbarBg }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src={logo} alt="Logo" style={{ height: '50px' }} />
        {/* <Typography variant="h6" component="div" sx={{ color: theme.titleColor }}>
          Gameroom
        </Typography> */}
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          color="default"
          inputProps={{ 'aria-label': 'theme switch' }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

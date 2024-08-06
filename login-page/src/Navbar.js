import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch } from '@mui/material';
import logo from './lsu.png'; // Add your logo image here

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src={logo} alt="Logo" style={{ height: '50px' }} />
        {/* <Typography variant="h6" component="div">
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

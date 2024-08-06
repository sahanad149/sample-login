import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { IoIosLogIn } from 'react-icons/io';

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Box 
      component={motion.form}
      onSubmit={handleSubmit}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'background.paper',
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        padding={2}
        fontWeight={600}>
        Login
      </Typography>
      <TextField
        type="text"
        label="Username"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<IoIosLogIn />}
        sx={{
          width: '100%',
          padding: '10px',
          borderRadius: 2,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;

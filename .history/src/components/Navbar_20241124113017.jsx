
import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';


const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AuraMart
        </Typography>
        <div>
          <InputBase placeholder="Search…" sx={{ color: 'inherit' }} />
          <IconButton color="inherit">
           
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

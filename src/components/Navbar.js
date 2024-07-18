import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import { AppBar, Toolbar, Typography, Button, IconButton,Menu,MenuItem} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    const{themeMode,toggleTheme} = useTheme();
    const[anchorEl,setAnchorEl] = useState(null);

    const handleAboutMenuOpen = (e) => {
      setAnchorEl(e.currentTarget);
    }

    const handleAboutMenuClose = () => {
      setAnchorEl(null);
    }

    const handleAboutClick = () => {
      setAnchorEl(null);
      window.location.href = '/about';
    };

  return (
    <AppBar className='appBar' position='fixed'
     sx={{backgroundColor: 'var(--app-bar-background-color)'}}>
      <Toolbar>
        <Typography variant='h6' component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Dinisuru Motors
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button
          color="inherit"
          onClick={handleAboutMenuOpen}
          endIcon={<ArrowDropDownIcon />}
        >
          About
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleAboutMenuClose}
        >
          <MenuItem component={Link} to="/about" onClick={handleAboutClick}>About Us</MenuItem>
          <MenuItem component={Link} to="/about/history" onClick={handleAboutMenuClose}>History</MenuItem>
          <MenuItem component={Link} to="/about/team" onClick={handleAboutMenuClose}>Team</MenuItem>
          <MenuItem component={Link} to="/about/values" onClick={handleAboutMenuClose}>Values</MenuItem>
        </Menu>
        <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
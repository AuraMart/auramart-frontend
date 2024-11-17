import React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ButtonGroup from '@mui/material/ButtonGroup';
import Check from '@mui/icons-material/Check';
import {
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Button,
  Typography,
} from '@mui/material';

function valuetext(value) {
  return `${value}°C`;
}

const ShoesSidebar = ({ filters, onFilterChange }) => {

  const [value, setValue] = React.useState([500, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 250, padding: 2 }}>
      
      
      <Paper sx={{ width: 250 }}>
      <MenuList dense>
        <MenuItem>
        <Typography variant="h6">Filter</Typography>
        </MenuItem>
        <Divider />
        
        <MenuItem>
        <Typography gutterBottom>Shoe style</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Sneakers</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Casual Shoes</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Formal Shoes</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Kids shoes</ListItemText>
        </MenuItem>
        <Divider />
        
        <MenuItem>
          <ListItemText>
          <Typography gutterBottom>Price</Typography>
        {/* <Slider
          defaultValue={500}
          aria-labelledby="price-slider"
          valueLabelDisplay="auto"
          min={500}
          max={10000}
        /> */}
        <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={500}
          max={10000}
      />
          </ListItemText>
        </MenuItem>
        <Divider />

        <MenuItem>
        <Typography gutterBottom>Bags</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Classic</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Casual</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>School Bags</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Elegant</ListItemText>
        </MenuItem>
        <Divider />

      </MenuList>
    </Paper>
    </Box>
  );
};

export default ShoesSidebar;

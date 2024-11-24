
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

const MenSidebar = ({ filters, onFilterChange }) => {

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
          <ListItemText inset>T-shirts</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Shorts</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Shirt</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Hoodies
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Pajamas</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Jackets</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Joggers</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Denim Trousers</ListItemText>
        </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemText>
          <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel component="legend">Categories</FormLabel>
        <FormGroup>
          {filters.categories.map((category, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox onChange={onFilterChange} value={category} />}
              label={category}
            />
          ))}
        </FormGroup>
      </FormControl>
          </ListItemText>
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
          <ListItemText>
          <Typography gutterBottom>Colors</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {filters.colors.map((color, index) => (
            <Button
              key={index}
              sx={{
                backgroundColor: color,
                minWidth: 30,
                height: 30,
                borderRadius: '50%',
              }}
            />
          ))}
        </Box>
          </ListItemText>
        </MenuItem>
        <Divider />
        
        <MenuItem>
          <ListItemText>
          <Typography gutterBottom>Sizes</Typography>
          <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1,
      }}
    >
      <Button variant="outlined">XXS</Button>
      <Button variant="outlined">XL</Button>
      <Button variant="outlined">XS</Button>
      <Button variant="outlined">S</Button>
      <Button variant="outlined">M</Button>
      <Button variant="outlined">L</Button>
      <Button variant="outlined">XXL</Button>
      <Button variant="outlined">3XL</Button>
      <Button variant="outlined">4XL</Button>
    </Box>
          </ListItemText>
        </MenuItem>
        <Divider />

        <MenuItem>
        <Typography gutterBottom>Dress style</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Classic</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Casual</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Sport</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Hoodies
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

export default MenSidebar;

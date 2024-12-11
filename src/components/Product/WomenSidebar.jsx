
import React, { useState } from "react";
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

const WomenSidebar = ({ filters, onFilterChange,onPriceChange }) => {
  const [value, setValue] = React.useState([500, 10000]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
    onPriceChange(newValue);
  };
  const handleSizeClick = (size) => {
    setSelectedSizes((prevSelected) =>
      prevSelected.includes(size)
        ? prevSelected.filter((s) => s !== size) 
        : [...prevSelected, size] 
    );
    onFilterChange({
      target: { name: "size", value: size, checked: !selectedSizes.includes(size) },
    });
  };

  return (
    <Box sx={{ width: 250, padding: 2 }}>
      <Paper sx={{ width: 250 }}>
        <MenuList dense>
          <MenuItem>
            <Typography variant="h6">Filters</Typography>
          </MenuItem>
          <Divider />

          {/* Brands */}
          <MenuItem>
            <FormControl component="fieldset">
              <Typography variant="subtitle1">Brands</Typography>
              <FormGroup>
                {(filters?.brands || []).map((brand, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        onChange={onFilterChange}
                        name="brand"
                        value={brand}
                      />
                    }
                    label={brand}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </MenuItem>
          <Divider />

         

          {/* Price Slider */}
          <MenuItem>
            <ListItemText>
              <Typography gutterBottom>Price Range</Typography>
              <Slider
                value={value}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={500}
                max={10000}
              />
            </ListItemText>
          </MenuItem>
          <Divider />

          {/* Colors */}
          <MenuItem>
            <ListItemText>
              <Typography gutterBottom>Colors</Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {filters.colors.map((color, index) => (
                  <Button
                    key={index}
                    sx={{
                      backgroundColor: color,
                      minWidth: 30,
                      height: 30,
                      borderRadius: "50%",
                    }}
                    name="color"
                    value={color}
                    onClick={() =>
                      onFilterChange({
                        target: { name: 'color', value: color, checked: true },
                      })
                    }
                  />
                ))}
              </Box>
            </ListItemText>
          </MenuItem>
          <Divider />

          {/* Sizes */}
          <MenuItem>
            <ListItemText>
              <Typography gutterBottom>Sizes</Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 1,
                }}
              >
                {filters.sizes.map((size, index) => (
                  <Button
                  key={index}
                  variant={selectedSizes.includes(size) ? "contained" : "outlined"}
                  value={size}
                  onClick={() => handleSizeClick(size)}
                    sx={{
                      backgroundColor: selectedSizes.includes(size)
                        ? "primary.main"
                        : "transparent",
                      color: selectedSizes.includes(size)
                        ? "white"
                        : "text.primary",
                    }}
                  // onClick={() =>
                  //   onFilterChange({
                  //     target: { name: 'size', value: size, checked: true },
                  //   })
                  // }
                >
                  {size}
                </Button>
                
                
                ))}
              </Box>
            </ListItemText>
          </MenuItem>
          <Divider />

           {/* Categories */}
           <MenuItem>
            <FormControl component="fieldset">
              <Typography variant="subtitle1">Categories</Typography>
              <FormGroup>
                {filters.categories.map((category, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        onChange={onFilterChange}
                        name="category"
                        value={category}
                      />
                    }
                    label={category}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </MenuItem>
         
        </MenuList>
      </Paper>
    </Box>
  );
};

export default WomenSidebar;

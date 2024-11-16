
import React from 'react';
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

const ProductFilter = ({ filters, onFilterChange }) => {
  return (
    <Box sx={{ width: 250, padding: 2 }}>
      <Typography variant="h6">Filter</Typography>
      
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
    
      <Box sx={{ mt: 4 }}>
        <Typography gutterBottom>Price</Typography>
        <Slider
          defaultValue={500}
          aria-labelledby="price-slider"
          valueLabelDisplay="auto"
          min={10}
          max={5000}
        />
      </Box>
      
      <Box sx={{ mt: 4 }}>
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
      </Box>
    </Box>
  );
};

export default ProductFilter;

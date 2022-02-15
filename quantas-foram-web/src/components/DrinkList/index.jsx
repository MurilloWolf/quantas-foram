import React, { useContext } from 'react';
import { Box } from '@mui/material';
import DrinkCounter from '../DrinkCounter';
import { DrinksContext } from '../../context/DrinksContext';

function DrinksList() {
  const { state } = useContext(DrinksContext);
  const flasks = Object.keys(state);
  return (
    <Box>
      {
        flasks.map((item) => (
          <DrinkCounter
            key={item}
            flask={item}
          />
        ))
      }
    </Box>
  );
}

export default DrinksList;

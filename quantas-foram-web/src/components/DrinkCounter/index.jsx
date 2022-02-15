import React, { useContext } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DrinksContext } from '../../context/DrinksContext';

function DrinkCounter({ flask }) {
  const { state, handleChangeState: onClickButton } = useContext(DrinksContext);

  const getFlaskName = () => {
    switch (flask) {
      case 'bottle1000':
        return 'Litrão';

      case 'bottle600':
        return '600ml';

      case 'longNeck':
        return 'Longneck';

      case 'bottle350':
        return 'Romarinho';

      case 'beerCan':
        return 'Latinha';
      default:
        return '';
    }
  };
  return (
    <Box>
      <Typography>{getFlaskName()}</Typography>
      <IconButton aria-label="remove" onClick={() => onClickButton(flask, -1)}>
        <RemoveIcon />
      </IconButton>
      <Typography>{state[flask]}</Typography>
      <IconButton aria-label="add" onClick={() => onClickButton(flask, 1)}>
        <AddIcon />
      </IconButton>
    </Box>
  );
}

export default DrinkCounter;

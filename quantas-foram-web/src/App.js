import React from 'react';
import { AppBar, Typography } from '@mui/material';
import DrinksList from './components/DrinkList';
import DrinksProvider from './context/DrinksContext';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Foram Quantas ?
        </Typography>
      </AppBar>
      <DrinksProvider>
        <DrinksList />
      </DrinksProvider>
    </div>
  );
}
export default App;

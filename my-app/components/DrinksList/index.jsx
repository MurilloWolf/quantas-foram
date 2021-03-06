import React, { useContext } from 'react';
import { View } from 'react-native';
import DrinkCounter from '../DrinkCounter';
import { DrinksContext } from '../Context/DrinksContext';

function DrinksList() {
  const { state } = useContext(DrinksContext);
  const flasks = Object.keys(state);
  return (
    <View>
      {
        flasks.map((item) => (
          <DrinkCounter
            key={item}
            flask={item}
          />
        ))
      }
    </View>
  );
}

export default DrinksList;

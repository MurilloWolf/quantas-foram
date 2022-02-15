import React, { createContext, useState } from 'react';

const DEFAULT_VALUE = {
  bottle1000: 0,
  bottle600: 0,
  longNeck: 0,
  bottle350: 0,
  beerCan: 0,
};

const DrinksContext = createContext(DEFAULT_VALUE);

function DrinksProvider({ children }) {
  const [state, setState] = useState({
    bottle1000: 0,
    bottle600: 0,
    longNeck: 0,
    bottle350: 0,
    beerCan: 0,
  });
  const handleChangeState = (name, value) => {
    setState((prevState) => {
      const flaskQuantity = prevState[name];
      const nextState = { ...prevState };

      if (flaskQuantity + value >= 0) {
        nextState[name] = flaskQuantity + value;
      } else {
        nextState[name] = 0;
      }
      return nextState;
    });
  };

  const contextValue = {
    state,
    handleChangeState,
  };

  return (
    <DrinksContext.Provider value={contextValue}>
      {children}
    </DrinksContext.Provider>
  );
}

export { DrinksContext };
export default DrinksProvider;

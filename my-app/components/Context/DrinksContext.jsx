import React, {
  createContext, useState,
} from 'react';

const DrinksContext = createContext();

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
      const newFlaskQuatity = flaskQuantity + value;

      const nextState = { ...prevState };
      nextState[name] = newFlaskQuatity >= 0 ? newFlaskQuatity : 0;
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

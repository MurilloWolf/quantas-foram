import React from 'react';
import { Header as ElementHeader } from 'react-native-elements';

function Header() {
  return (
    <ElementHeader
      barStyle="default"
      centerComponent={{
        text: '🍺 Quantas foram ?',
        style: { color: '#fff', fontFamily: 'Staatliches-Regular', fontSize: 24 },
      }}
      centerContainerStyle={{}}
      placement="center"
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
}

export default Header;

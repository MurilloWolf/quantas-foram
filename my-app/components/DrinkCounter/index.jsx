import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { DrinksContext } from '../Context/DrinksContext';
import * as S from './styles';

function DrinkCounter({ flask }) {
  const { state, handleChangeState: onButtonPress } = useContext(DrinksContext);

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
    <S.Container>
      <S.FlaskTitle>{getFlaskName()}</S.FlaskTitle>
      <S.ButtonGroup>
        <Button
          onPress={() => onButtonPress(flask, -1)}
          buttonStyle={{ width: 64 }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: '#00F',
          }}
          disabledTitleStyle={{ color: '#00F' }}
          linearGradientProps={null}
          loadingProps={{ animating: true }}
          icon={<Icon name="remove" type="material" color="#FFF" />}
          titleStyle={{ marginHorizontal: 5 }}
        />
        <S.FlaskQuantity>{state[flask]}</S.FlaskQuantity>
        <Button
          onPress={() => onButtonPress(flask, 1)}
          buttonStyle={{ width: 64 }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: '#00F',
          }}
          icon={<Icon name="add" type="material" color="#FFF" />}
          disabledTitleStyle={{ color: '#00F' }}
          linearGradientProps={null}
          loadingProps={{ animating: true }}
          titleStyle={{ marginHorizontal: 5 }}
        />
      </S.ButtonGroup>
    </S.Container>
  );
}
export default DrinkCounter;

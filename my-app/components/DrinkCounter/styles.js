import styled from 'styled-components/native';

const Container = styled.View`
    padding:12px;
    flex-flow: column wrap;
    text-align:center;
    margin-top:24px;
    font-family: 'Staatliches-Regular';
`;

const ButtonGroup = styled.View`
flex-flow: row nowrap;
justify-content:space-evenly;
align-items:center;
width:100%;
height:auto
`;

const FlaskTitle = styled.Text`
    text-align:center;
    font-size: 24px;
    margin: 5px;
    font-family: 'Staatliches-Regular';

`;

const FlaskQuantity = styled.Text`
text-align:center;
font-size: 18px;
margin: 5px;
font-family: 'Staatliches-Regular';

`;

export {
  Container, ButtonGroup, FlaskTitle, FlaskQuantity,
};

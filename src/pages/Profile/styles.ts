import styled from 'styled-components';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
height: 100%;
display: flex;
`;

export const Header = styled.View`     
width: 100%;
padding: 16px 13px 13px 10px;
background-color:${ColorTheme.Azul};
flex-direction: row;
height: 60px;
align-items: center;
justify-content: space-between;
`;
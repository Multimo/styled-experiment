import React, { Component } from 'react';
import logo from './logo.svg';

import styled, { keyframes, ThemeProvider } from 'styled-components';



const Outer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;

  > h2 {
    color: red;
  }
`;

const _spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const _reverseSpin = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

const Logo = styled.img`
  animation: ${props => props.reverse ? _spin : _reverseSpin} infinite 20s linear;
  height: 80px;
`;

const Intro = styled.p`
  font-size: large;
`;

const btnTheme = `
    color: #fff;
    background-color: #e35342;
    background-image: -webkit-linear-gradient(top,#e35342 0,#e35342 100%);
    background-image: -o-linear-gradient(top,#e35342 0,#e35342 100%);
    background-image: linear-gradient(to bottom,#e35342 0,#e35342 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFE35342', endColorstr='#FFE35342', GradientType=0);
`;

const defaultTheme = `

`;

const Button = styled.button`
    display: inline-block;
    margin-bottom: 0;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #ccc;
    white-space: nowrap;
    text-decoration: none;
    padding: 4px 20px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    user-select: none;

    ${props => props.theme.currentTheme.btnTheme ? btnTheme : defaultTheme }
`;



const currentTheme = {
  btnTheme: true,
};

export default class App extends Component {

  render() {
    return (
        <ThemeProvider theme={{currentTheme}}>
        <Outer>
          <Header>
            <Logo src={logo} alt="logo" />
            <Logo reverse src={logo} alt="logo" />
            <h2>Welcome to Styled Componens in React</h2>
          </Header>
          <Intro className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Intro>
          <Button>
            Ello Darkness
          </Button>
        </Outer>
        </ThemeProvider>
    )
  }
}

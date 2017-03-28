// import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Outer = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;

  > h2 {
    color: red;
  }
`;

export const _spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const _reverseSpin = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

export const Logo = styled.img`
  animation: ${props => props.reverse ? _spin : _reverseSpin} infinite 20s linear;
  height: 80px;
`;

export const Intro = styled.p`
  font-size: large;
`;

export const btnTheme = `
    color: #fff;
    background-color: #e35342;
    background-image: -webkit-linear-gradient(top,#e35342 0,#e35342 100%);
    background-image: -o-linear-gradient(top,#e35342 0,#e35342 100%);
    background-image: linear-gradient(to bottom,#e35342 0,#e35342 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFE35342', endColorstr='#FFE35342', GradientType=0);
`;

export const defaultTheme = `

`;

export const Button = styled.button`
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

    ${props => props.theme.btnTheme ? btnTheme : defaultTheme }
`;
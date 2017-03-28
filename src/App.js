import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { toggleTheme } from "./redux/actions";

import { Outer, Header, Logo, Intro, Button } from '../src/StyledComponents/styled';

// http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino

class App extends Component {

  HandleCLick = () => {
    this.props.toggleTheme();
  }

  render() {
    const {
      btnTheme,
    }  = this.props;

    console.log(this.props, "props");
    return (
      <ThemeProvider theme={{btnTheme}}>
        <Outer>
          <Header>
            <Logo src={logo} alt="logo" />
            <Logo reverse src={logo} alt="logo" />
            <h2>Welcome to Styled Componens in React</h2>
          </Header>
          <Intro className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Intro>
          <Button onClick={this.HandleCLick}>
            Ello Darkness
          </Button>
        </Outer>
      </ThemeProvider>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    btnTheme: state.theme.btnTheme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: () => {
      dispatch(toggleTheme())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

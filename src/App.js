import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import Grid from "./components/Grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <Grid/>
      </div>
    );
  }
}

export default App;

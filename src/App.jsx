import './App.css';
import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/UserContext';

class App extends Component {
  state = {
    userName: 'Bob',
  };
  render() {
    return (
      <UserContext.Provider value={this.state.userName}>
        <div className="App">
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;

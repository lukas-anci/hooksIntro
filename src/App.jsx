import './App.css';
import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/UserContext';

class App extends Component {
  state = {
    user: {
      name: 'Bob',
      age: 41,
    },
  };
  handleLogIn = (username) => {
    console.log('handlelolz', username);
  };
  render() {
    return (
      <UserContext.Provider
        value={{ user: this.state.user, onLogin: this.handleLogIn }}
      >
        <div className="App">
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;

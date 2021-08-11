import './App.css';
import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/UserContext';
import Login from './context/Login';

class App extends Component {
  state = {
    user: {
      name: 'Bob',
      age: 41,
    },
  };
  handleLogIn = (username) => {
    console.log('handlelolz', username);
    this.setState({ user: { ...this.state.user, name: username } });
  };
  render() {
    return (
      <UserContext.Provider
        value={{ user: this.state.user, onLogin: this.handleLogIn }}
      >
        <div className="App">
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;

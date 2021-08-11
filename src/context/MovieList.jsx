import React, { Component } from 'react';
import UserContext from './UserContext';
class MovieList extends Component {
  state = {};
  render() {
    return (
      <UserContext.Consumer>
        {() => (
          <div>
            <h4>Movie List</h4>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;

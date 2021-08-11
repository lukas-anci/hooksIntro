import React, { Component } from 'react';
import UserContext from './UserContext';
class MovieList extends Component {
  // pridedam contexta kad butu pasiekiamas visoje klaseje(2 budas)
  static contextType = UserContext;
  componentDidMount() {
    console.log('MovieList mounted to dom');
    console.log('context', this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userValue) => (
          <div>
            <h4>Movie List</h4>
            <p>
              {userValue.userName} likes this movie list and he is{' '}
              {userValue.age} years old
            </p>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
// pridedam contexta kad butu pasiekiamas visoje klaseje
// MovieList.contextType = UserContext;
export default MovieList;

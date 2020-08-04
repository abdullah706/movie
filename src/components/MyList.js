import React, { Component } from 'react';

class MyList extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      movieIds: this.getFromLocalStorage()
    };
  }


  componentDidMount() {
    // fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f6b33c9420fd4fa25974c14d810c0a1e',
    //   { method: 'GET' }).then(res => res.json())
    //   .then(json => {
    //     console.log(json)
    //     this.setState({
    //       movies: json.results
    //     })
    //   });

    // // single task promise returning a promise
    // const fetchMovie = (movieId) =>
    //   fetch(`http://api.themoviedb.org/3/movie/${movieId}?api_key=f6b33c9420fd4fa25974c14d810c0a1e`,
    //     { method: 'GET' })
    //     .then(res => res.json())
    //     .then(data => data[0]); // data[0] -> we receive an array of one element, so we return the first element directly 

    // // create an array of promises
    // const promises = this.state.movieIds.map(movie => fetchMovie(movie));

    // // // execute all promises
    // Promise.all(promises)
    //   .then((movie) => {
    //     // receives an array of responses
    //     console.log('movie[0]', movie)
    //   });

  }

  getFromLocalStorage = () => {
    return localStorage.getItem('my-list');
  }

  render() {
    return (
      <div>MyList</div>
    );
  }
}

export default MyList;

import React, { Component } from 'react';

import Card from './movie/Card';

class PopularBattle extends Component {
  state = {
    movies: [],
    currentPage: 1,
    myList: []
  }

  saveToLocalStorage = (movieId) => {
    this.setState({
      myList: [...this.state.myList, JSON.stringify(movieId)]
    })
    localStorage.setItem('my-list', JSON.stringify(this.state.myList)); 
    // localStorage : permet de stocker des données dans le navigateur
    // Ici on stocke l'id du film sur lequel l'utilisateur a cliqué, on le transforme en string (JSON.stringify)
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f6b33c9420fd4fa25974c14d810c0a1e',
      { method: 'GET' }).then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          movies: json.results
        })
      });
  }

  nextPage = (id) => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }

  render() {
    return (
      // <div>{JSON.stringify(this.state.movies)}</div> Transforme un objet javascript en string
      <div className="container" >
        {this.state.movies.slice(0 + (this.state.currentPage - 1) * 2, 2 + (this.state.currentPage - 1) * 2).map((movie) => {
          return (
            <Card key={movie.id}
              title={movie.title}
              description={movie.overview}
              image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              clicked={() => {
                this.saveToLocalStorage(movie.id);
                this.nextPage(movie.id)
              }} />
          )
        })}
        {/* <button onClick={() => this.nextPage()}>Next Page</button> */}
      </div>
    );
  }
}

export default PopularBattle;

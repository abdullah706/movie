import React, { Component } from 'react';

import Card from './movie/Card';

class Popular extends Component {

    state = {
        movies: []
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

    render() {
        return (
            <div className="container" >
                {this.state.movies.map((movie) => {
                    return (
                        <Card key={movie.id} 
                            title={movie.title}
                            description={movie.overview} 
                            image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}/>
                    )
                })}
            </div>
        );
    }
}

export default Popular;

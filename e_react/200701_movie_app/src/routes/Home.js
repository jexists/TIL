//Home.js

import React from 'react';
import axios from 'axios';

import Movie from '../components/Movie';
import "./home.css";

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: { 
        data: { movies }
      }
    } = await axios.get("https://movies-api.accel.li/api/v2/list_movies.json?sort_by=rating");
    // console.log(movies);
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? ( 
          <div className="loader">
            <span>로딩중입니다...</span>
          </div> 
        ) : ( 
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
import React, { useEffect, useState } from "react";
import Card from './Card';
import "/my-app/src/App.css";
import "./MovieCard.css";

function MovieCard() {
  const [movies, setMovies] = useState([]);

  function parseData(data) {
    data.forEach(movie => {
      setMovies(prevState => ([
        ...prevState,
        {
          id: movie.pk,
          title: movie.fields.movie_title,
          release_date: movie.fields.release_date,
          rating: movie.fields.rating,
          poster_url: movie.fields.poster_url,
          synopsis: movie.fields.synopsis,
        }
      ]))
    })
  }

  useEffect(() => {
    fetch('http://localhost:8000/movie/')
      .then(response => response.json())
      .then(data => parseData(data))
  }, [])


  return (
    <div>
      <div className="MovieCard Grid">
        {movies.map((movie) =>
          <Card {...movie} key={movie.title} />
        )}
      </div>
    </div>
  );
}

export default MovieCard;
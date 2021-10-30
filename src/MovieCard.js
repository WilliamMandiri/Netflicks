import React from "react";
import "/my-app/src/App.css";
import "./MovieCard.css";

function MovieCard({movie}) {
  return (
    <div className="card pt-lg-4">
      <img className="poster" src={movie.poster}/>
      <div>
        <h3 className="title">{movie.title} </h3>
        <p className="overview">{movie.overview}</p>
        <p className="genres">Genres: {movie.genres.join(", ")}</p>
      </div>
    </div>
    );
  }

export default MovieCard;
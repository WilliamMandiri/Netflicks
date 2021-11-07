import React from 'react';
import Delete from './Delete'
import './Card.css';

function deleteMovie(movieid) {
  const { id } = movieid;

  if (window.confirm('Are you sure?')) {
    fetch(`http://127.0.0.1:8000/movie/${id}/delete`, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
  }
}


function Card(movie) {
  return (
    <div className="card pt-lg-4">
      <img className="poster" src={movie.poster_url}></img>
      <div>
        <h3 className="title">{movie.title} </h3>
        <p>Rating: {movie.rating}</p>
        <p>Release Date: {movie.release_date}</p>
        <p className="overview">{movie.synopsis}</p>
        <button className="mr-2" onClick={() => deleteMovie(movie.id)} variant="danger">Delete</button>
      </div>
    </div>
  )
}



export default Card;
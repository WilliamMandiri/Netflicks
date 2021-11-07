import React from 'react';

function Delete(movie) {
  const { id } = movie;

  const deleteMovie = async () => {
    const deletedmovie = {
      id: id
    };

    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(deletedmovie)
    };

    await fetch(`http://localhost:8000/movie/${id}/delete/`, requestOptions)
          .then(response => response.json);

    window.location.reload(false);
  };

  return (
    <button onClick={deleteMovie}>Delete</button>
  )
}

export default Delete;


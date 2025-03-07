import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">Details</Link>
          <button onClick={addToFavorites} className="btn btn-warning ms-2">❤️ Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

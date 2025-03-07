import React, { useState, useEffect } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="container mt-4">
      <h2>My Favorite Movies</h2>
      <div className="row">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div className="col-md-3 my-2" key={movie.imdbID}>
              <div className="card">
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <button onClick={() => removeFavorite(movie.imdbID)} className="btn btn-danger">❌ Remove</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No favorite movies added.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;

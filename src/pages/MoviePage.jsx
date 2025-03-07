import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${id}`)
      .then((res) => setMovie(res.data));
  }, [id]);

  return movie ? (
    <div className="container mt-4">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
      <p>{movie.Plot}</p>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
  ) : <h3>Loading...</h3>;
};

export default MoviePage;

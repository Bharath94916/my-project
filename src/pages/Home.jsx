import React, { useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    if (query.length > 2) {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=e305c113&s=${query}`);
      if (data.Search) setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search Movies..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          searchMovies(e.target.value);
        }}
      />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;

// ContextMovieCard.jsx
import React, { useState, useEffect } from "react";
import { get } from "../data/httpClient";
import MovieCard from "./MovieCard";
import "./ContextMovieCard.css"; // Corregido aquí

const ContextMovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      console.log(data);
    });
  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default ContextMovieCard;

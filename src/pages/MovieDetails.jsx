import React, { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { useParams, Link } from "react-router-dom"; // Importa Link
import getMovieImg from "../components/utils/getMovieImg";
import "../pages/MovieDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get(`/movie/${movieId}`).then((data) => {
      setMovie(data);
      setGenres(data.genres[0]);
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie?.poster_path, 500);

  return (
    <div className="detailsContainer">
      {movie && (
        <img src={imageUrl} alt={movie.title} className="col movieImage" />
      )}

      <div className=" col movieDetails">
        <Link to="/" className="backButton">
          Home 🏠
        </Link>

        <p className="title">
          <strong>Title :</strong>
          {movie.title}
        </p>
        <p className="col genre">
          <strong>Genre : </strong>
          {genres.name}
        </p>
        <p className="col description">
          <strong>Description : </strong>
          {movie.overview}
        </p>
        <p className="col releaseDate">
          <strong>Release Date : </strong>
          {movie.release_date}
        </p>
        <p className="col voteAverage">
          <strong>Vote Average : </strong>
          {movie.vote_average}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;

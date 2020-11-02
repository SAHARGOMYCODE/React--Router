import React from "react";
import "./MovieCard.css";
import Rate from "../Rate";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="cardMovie">
      <div className="card_left">
        <img src={movie.image} alt="MoviePoster" />
      </div>
      <div className="card_right">
        <h1>{movie.name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{movie.date}</li>
            <li>||</li>
            <li>{movie.type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={movie.rating} />
        </div>
        <div className="card_right__review">
          <Link to={`/description/${movie.name}`}>
            Read the description of this movie
          </Link>
          <p>{movie.description}</p>

          <a href="/">Read More</a>
        </div>
        <div className="card_right__button">
          <a href="/">WATCH TRAILER</a>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
MovieCard.propTypes = { movies: PropTypes.object };

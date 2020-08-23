import React from "react";
import Slider from "react-slick";

import { POSTER_SIZE, IMAGE_BASE_URL } from "../config";

import { getSliderSettings } from "./../helpers";

import NOIMAGE from "./images/no-image-wide.png";

import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Spinner from "./elements/Spinner";
import BigMovieThumb from "./elements/BigMovieThumb";

import useMovieFetch from "./hooks/useMovieFetch";

import { StyledMovie } from "./styles/StyledMovie";

function Movie({ movieId }) {
  const [movie, loading, error] = useMovieFetch(movieId);
  console.log(movie);

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <Spinner />;

  return (
    <StyledMovie>
      <Navigation movieName={movie.title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <div className="slider-wrapper">
        <h2 className="section-title">Actors</h2>
        <Slider {...getSliderSettings(6, 4, 2)}>
          {movie.actors.map((actor) => (
            <Actor key={actor.credit_id} actor={actor} />
          ))}
        </Slider>
      </div>

      <div className="slider-wrapper">
        <h2 className="section-title">Images</h2>
        <Slider {...getSliderSettings(4, 3, 1)}>
          {movie.images.map((image, i) => (
            <img src={image} alt={movie.title} key={i} />
          ))}
        </Slider>
      </div>

      {movie.videos && (
        <div className="slider-wrapper">
          <h2 className="section-title">Videos</h2>
          <div className="videos-wrapper">
            {movie.videos.map((video, i) => (
              <iframe
                title={video.name}
                src={`https://www.youtube.com/embed/${video.key}`}
                key={i}
              />
            ))}
          </div>
        </div>
      )}

      {movie.similarMovies && (
        <div className="slider-wrapper">
          <h2 className="section-title">Similar movies</h2>
          <div className="similar-movies">
            {movie.similarMovies.map((sm, i) => (
              <BigMovieThumb
                key={i}
                movieId={sm.id}
                image={
                  sm.backdrop_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${sm.backdrop_path}`
                    : NOIMAGE
                }
                title={sm.title}
              />
            ))}
          </div>
        </div>
      )}
    </StyledMovie>
  );
}

export default Movie;

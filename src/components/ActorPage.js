import React from "react";
import Slider from "react-slick";

import NOIMAGE from "./images/no_image.jpg";

import { POSTER_SIZE, IMAGE_BASE_URL } from "../config";

import { getSliderSettings } from "./../helpers";

import Navigation from "./elements/Navigation";
import ActorInfo from "./elements/ActorInfo";
import ActorInfoBar from "./elements/ActorInfoBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import Spinner from "./elements/Spinner";

import { StyledMovie } from "./styles/StyledMovie";

import useActorFetch from "./hooks/useActorFetch";

function ActorPage({ actorId }) {
  const [actor, loading, error] = useActorFetch(actorId);

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <Spinner />;

  console.log(actor);

  return (
    <StyledMovie>
      <Navigation movieName={actor.name} />
      <ActorInfo actor={actor} />
      <ActorInfoBar time={actor.birthday} rating={actor.popularity} />
      <div className="slider-wrapper">
        <h2 className="section-title">IMAGES</h2>
        <Slider {...getSliderSettings(6, 4, 2)}>
          {actor.images.map((img, index) => (
            <img key={index} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${img}`} />
          ))}
        </Slider>
      </div>
      <Grid header="MOVIES">
        {actor.movieCasts.map((movie, index) => (
          <MovieThumb
            key={index}
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : movie.backdrop_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`
                : NOIMAGE
            }
            movieId={movie.id}
            clickable={true}
            movieName={movie.title}
          />
        ))}
      </Grid>
    </StyledMovie>
  );
}

export default ActorPage;

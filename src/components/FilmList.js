import React from "react";

const FilmList = (props) => {
  const Favorites = props.favorites;
  return (
    <React.Fragment>
      {props.films.map((film, index) => (
        <div className="image-container d-flex justify-content-around m-2">
          <img src={film.Poster} alt="harry potter" />
          <div
            onClick={() => props.favoritesChosen(film)}
            className="overlay d-flex align-items-center justified-content-center"
          >
            <Favorites />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default FilmList;

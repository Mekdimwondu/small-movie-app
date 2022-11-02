import React from "react";
const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        placeholder="search for a film"
        value={props.Value}
        onChange={(event) => props.setSearchFilm(event.target.value)}
      />
    </div>
  );
};
export default SearchBox;

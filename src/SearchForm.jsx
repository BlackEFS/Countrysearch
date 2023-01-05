import React from "react";

const SearchForm = props => {
  return (
    <form>
      <input
        name="search"
        placeholder="search countries"
        value={props.search}
        onChange={props.onSearchChange}
      />
    </form>
  );
};

export default SearchForm;
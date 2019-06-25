import React from "react";

const Search = props => {
  return (
    <form>
      <label>
          Search for your favorite GoT Character:
          <br/>
        <input type="text" name="name" placeholder="Search"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Search;

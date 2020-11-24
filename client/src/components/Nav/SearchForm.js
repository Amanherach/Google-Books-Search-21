import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control book-input"
          placeholder="Enter a book title to search for on Google Books"
          id="search"
        />

        <button
          onClick={props.handleFormSubmit}
          className="btn btn-info search-btn"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../context/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <input
            type="text"
            className="search-bar"
            placeholder={
              locale === "id" ? "Cari berdasarkan nama" : "Search by Name"
            }
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
          />
        );
      }}
    </LocaleConsumer>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;

import React from "react";
import "./search.css";

export default function Search(props) {
  return (
  <div className="weather-app">
    <header>
      <form className="search-form" id="search-form">
        <input
          type="search"
          placeholder="Enter a city.."
          required
          id="search-form-input"
          className="search-form-input"
        />
        <input type="submit" value="Search" className="search-form-button" />
      </form>
    </header>
  </div>
  );
}
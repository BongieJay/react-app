import React from "react";
import "./styles.css";
import Search from "./Search";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  let weatherData = {
    city: "Sydney",
    temperature: "25",
    date: "Sunday 12:35",
    description: "Sunshine",
    imgURL: "25",
    humidity: "30",
    wind: "8",
  };

  return (
    <div className="App">
      <Search />
      <Main />
      <Footer />
    </div>
  );
}
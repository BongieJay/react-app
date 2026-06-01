import React from "react";
import "./footer.css";

export default function Footer(props) {
  return (
    <div className="footer">
      <footer>
        This project was coded by
        <a href="https://github.com/BongieJay" target="_blank rel="noreferr>
          Sbongile Ngwekazi
        </a>
        , is open-sourced on
        <a href="https://github.com/BongieJay/my-daily-weather" target="_blank" rel="noreferrer">
          Github
        </a>
        and
        <a href="https://jay-daily-weather-app.netlify.app/" target="_blank" rel="noreferrer">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
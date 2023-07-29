import React from "react";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const footer = () => {
  function handleClickScroll() {
    window.scrollTo(0, 0);
  }
  return (
    <footer>
      <div className="ftr2">
        <input
          type="text"
          placeholder="Enter your email to get curated content from our trainers and nutrition experts to keep you feeling good…"
        />
        <a
          className="btn"
          href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHNDghcrCkVKTtJDrFcvRqPXDMLVMgSLPngxkRqLhmkNKlXpRjDGHRgxQHGfrFbSWxsFSvZVJKdWKg"
          target="_blank"
        >
          Sign Up
          {/* <AlternateEmailIcon /> */}
        </a>
        {/* <input type="submit" value="Sign Up" className="btn" /> */}
      </div>
      <div className="ftr3">
        <div className="links">
          <a href="/">home</a>
          <a href="/">about</a>
          <a href="/">services</a>
          <a href="/">projects</a>
          <a href="/">contact</a>
        </div>
        <div className="policy">
          <span>
            Copyright © QUBIT &nbsp;&nbsp;&nbsp; Privacy Policy &nbsp;&nbsp;
            &nbsp; Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default footer;

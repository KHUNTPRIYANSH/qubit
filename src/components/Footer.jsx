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
      <div className="ftr1">
        <div className="f1r">
          <div className="logo">
            <h1>C&F</h1>
          </div>
          <div className="loc">
            Chaggan and Family, Rajkot, Gujarat, India -360004
            <br /> +91 98765 54321
          </div>
          <div className="tm">
            Every day: 9:00 – 22:00 <br /> Sat – Sun: 8:00 – 21:00
          </div>
        </div>
        <div className="f1l">
          <FacebookRoundedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
      </div>
      <div className="ftr2">
        <input
          type="text"
          placeholder="Enter your email to get curated content from our trainers and nutrition experts to keep you feeling good…"
        />
        <input type="submit" value="Sign Up" className="btn" />
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
            Copyright © KPD &nbsp;&nbsp;&nbsp; Privacy Policy &nbsp;&nbsp;
            &nbsp; Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default footer;

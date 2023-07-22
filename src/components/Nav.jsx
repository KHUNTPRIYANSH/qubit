import React from "react";
import "../styles/Nav.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
const Nav = () => {
  return (
    <>
      <header id="main-nav">
        <nav>
          <MenuIcon className="ham" />
          <div className="nv-left">
            <a href="/">home</a>
            <a href="/">about</a>
            <a href="/">services</a>
            <a href="/">projects</a>
            <a href="/">contact</a>
          </div>
          <div className="nv-right">
            <InstagramIcon />
            <LinkedInIcon />
            <AlternateEmailIcon />
            <TwitterIcon />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
import React, { useState, useEffect } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Dropdownmenu";
import Dropdownmenu from "./Dropdownmenu";

export default function Navbar(props) {
  const [isHomePath, setIsHomePath] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsHomePath(location.pathname === "/");
  }, [location.pathname]);

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if ((e.key === "Enter" || e.button === 0) && searchTerm) {
      setSearchTerm(null);
      navigate({
        pathname: "/search",
        search: `?${createSearchParams({ q: searchTerm.trim() })}`,
      });
    }
  };

  return (
    <div className="wholediv_navbar">
      <div className="title_style_display">
        <a className="link_underline_style1" href="/">
          {props.title}
        </a>
      </div>
      <div className="link_item_style_display">
        <div className="home_firms">
          <div className="link_item_individual_style_display">
            <Link className="link_underline_style" to="/">
              <button
                className={
                  isHomePath
                    ? "button1 hello active1"
                    : "button1 hello color_none"
                }
              >
                Home
              </button>
            </Link>
          </div>
          <div>
            <div className="link_item_individual_style_display">
              <Dropdownmenu className="link_underline_style"></Dropdownmenu>
            </div>
          </div>
        </div>
        <div className="searchicon">
          <div className="input-wrapper">
            <button className="icon" onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15px"
                width="15px"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="black"
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="black"
                  d="M22 22L20 20"
                ></path>
              </svg>
            </button>
            <input
              placeholder="Search Here..."
              className="input"
              name="text"
              type="text"
              onKeyUp={handleSearch}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string };

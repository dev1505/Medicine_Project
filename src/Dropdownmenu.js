import React, { useState, useEffect } from "react";
import "./Dropdownmenu.css";
// import "./Navbar.css";
// import { Routes, Route } from "react-router-dom";
// import MedicineInfo from "./MedicineInfo";
import { Link, useLocation } from "react-router-dom";

export default function Dropdownmenu(props) {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsClicked(
      location.pathname === "/products" || location.pathname === "/company"
    );
  }, [location.pathname]);

  return (
    <div className="dropdown">
      <div className="content_style">
        <button className={isClicked ? "button2 active" : "button2"}>
          Firms
        </button>
      </div>
      <div className="dropdown_container">
        <div className="dropdown-content">
          <Link to="/company" className="dropdown_items_style">
            Company
          </Link>
          <Link to="/products" className="dropdown_items_style">
            Products
          </Link>
        </div>
      </div>
    </div>
  );
}

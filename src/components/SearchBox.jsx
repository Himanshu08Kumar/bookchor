import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 4%",
        marginBottom:"1rem"
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <img src={Logo} alt="" height={30} />
      </div>
      <Link
        to="/login"
        style={{
          fontSize: "1.2rem",
          color: "black",
          textDecoration: "none",
          fontWeight:"600"
        }}
      >
        <span
          style={{
            padding: "1rem",
            border: "none",
            backgroundColor: "#98f5e133",
            color: "#02c39a",
            borderRadius: "50%",
            margin: "5px",
          }}
        >
          <FaRegUser />
        </span>
        Login
      </Link>
    </div>
  );
};

export default SearchBox;

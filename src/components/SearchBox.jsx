import React from "react";
import Logo from "../assets/logo.svg";
import { FcSearch } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 4%",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <img src={Logo} alt="" height={30} />
      </div>
      <p
        style={{
          fontSize: "1.2rem",
        }}
      >
        <span
          style={{
            padding: "1rem",
            border: "none",
            backgroundColor: "#98f5e126",
            color: "#02c39a",
            borderRadius: "50%",
            margin: "5px",
          }}
        >
          <FaRegUser />
        </span>
        Login
      </p>
    </div>
  );
};

export default SearchBox;

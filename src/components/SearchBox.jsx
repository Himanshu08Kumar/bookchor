import React from "react";
import Logo from "../assets/logo.svg";
import { FcSearch } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <img src={Logo} alt="" height={30} />
        <input
          type="text"
          style={{
            // display:"flex",
            padding: "0.5rem 1rem",
            width: "80%",
            marginLeft: "1rem",
          }}
          placeholder="Search bu ISBN, Author, Title"
        />
        <button>
          <FcSearch />
        </button>
      </div>
      <p style={{
        fontSize: "1.2rem",
      }}>
        <span style={{
          padding:'1rem',
          border: "none",
          backgroundColor: "#98f5e126",
          color:"#02c39a",
          borderRadius: "50%",
          margin:"5px"
        }}>
          <FaRegUser />
        </span>
        Login
      </p>
    </div>
  );
};

export default SearchBox;

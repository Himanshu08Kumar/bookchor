import React, { useState, useEffect } from "react";
import topReads from "../../topReads.json";
import Rating from "@mui/material/Rating";
import { GiShoppingCart } from "react-icons/gi";
import { MdRemoveShoppingCart } from "react-icons/md";

const Books = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setData(topReads);
  }, []);

  return (
    <div className="books-container">
      {/* Input for search */}
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Display the books based on search */}
      <h1
        style={{
          color: "#022b3a",
          fontSize: "44px",
          fontWeight: "700",
          padding: "1rem 0",
        }}
      >
        Top Reads
      </h1>
      <div className="book-list">
        {data
          .filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} className="book-image" />
              <h3 className="book-title">
                {book.title} by {book.author}
              </h3>
              <h5>
                {book.currency} {book.price}
              </h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Rating
                  name="read-only"
                  value={book.rating}
                  precision={0.5}
                  readOnly
                />
                <span
                  style={{
                    color: "#adb5bd",
                  }}
                >
                  ({book.reviews})
                </span>
              </div>
              <p>
                {book.availability.trim().toLowerCase() === "out of stock" && (
                  <p
                    className={
                      book.availability.trim().toLowerCase() ===
                        "out of stock" && "availability "
                    }
                    style={{
                      color: "#e74c3c",
                      marginTop: "0.8rem",
                    }}
                  >
                    <MdRemoveShoppingCart size={30} />
                    Currently {book.availability}!!
                  </p>
                )}
              </p>
              {book.availability.trim().toLowerCase() === "in stock" && (
                <button className="cartButton">
                  <GiShoppingCart
                    size={25}
                    style={{
                      marginBottom: "5px",
                    }}
                  />
                  Add To Cart
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Books;

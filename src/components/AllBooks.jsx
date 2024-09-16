import React, { useState, useEffect } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import db from "../../db.json";
import Rating from "@mui/material/Rating";

const AllBooks = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setData(db);
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="books-container">
      {/* Input for search */}

      {/* Display the books based on search */}
      <h1
        style={{
          color: "#022b3a",
          fontSize: "44px",
          fontWeight: "700",
          padding: "1rem 0",
        }}
      >
        Fiction
      </h1>
      <div className="book-list">
        {data.map((book) => (
          <div
            className="book-card"
            key={book.id}
            onClick={() => handleBookClick(book.id)}
          >
            <img src={book.image} alt={book.title} className="book-image" />
            <h3 className="book-title">
              {book.title} by {book.author}
            </h3>
            <h5>
              {book.currency} {book.price}
            </h5>
            <Rating
              name="read-only"
              value={book.rating}
              precision={0.5}
              readOnly
            />
            <p>
              {book.availability.trim().toLowerCase() === "out of stock" && (
                <p
                  className={
                    book.availability.trim().toLowerCase() === "out of stock" &&
                    "availability "
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

export default AllBooks;

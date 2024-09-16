import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../db.json";
import { GiShoppingCart } from "react-icons/gi";
import { MdRemoveShoppingCart } from "react-icons/md";
import Rating from "@mui/material/Rating";
import "./BookDetails.css"; // Import the CSS file

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const selectedBook = db.find((b) => b.id === parseInt(id));
    setBook(selectedBook);
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details-container">
      <div className="book-details-card">
        {/* Book Image */}
        <div className="book-details-image-container">
          <img src={book.image} alt={book.title} />
        </div>

        {/* Book Details */}
        <div className="book-details-info">
          <h3 className="book-details-title">{book.title}</h3>
          <h5 className="book-details-author">by {book.author}</h5>
          <p className="book-details-genre"><span style={{fontWeight:"600", fontSize:"18px"}}>Genre:</span> {book.genre}</p>
          <p className="book-details-condition"><span style={{fontWeight:"600", fontSize:"18px"}}>Condition:</span> {book.condition}</p>
          <p className="book-details-published-year"><span style={{fontWeight:"600", fontSize:"18px"}}>Published Year:</span> {book.published_year}</p>
          <p className="book-details-description" style={{fontFamily:"cursive", fontSize:"18px"}}>{book.description}</p>

          <Rating name="read-only" value={book.rating} precision={0.5} readOnly />

          <h5 className="book-details-price">
            {book.currency} {book.price}
          </h5>

          {book.availability.trim().toLowerCase() === "out of stock" ? (
            <p className="book-details-availability">
              <MdRemoveShoppingCart size={30} />
              Currently {book.availability}!!
            </p>
          ) : (
            <button className="book-details-cartButton">
              <GiShoppingCart size={25} />
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

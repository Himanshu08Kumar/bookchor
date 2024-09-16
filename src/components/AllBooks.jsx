import React, { useState, useEffect } from 'react';
import db from "../../db.json";

const AllBooks = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(db);
    }, []);

    return (
        <div className="books-container">
            {/* Input for search */}

            {/* Display the books based on search */}
            <h1 style={{
                color: "#022b3a",
                fontSize: "44px",
                fontWeight:"700",
                padding:"1rem 0"
            }}>Fiction</h1>
            <div className="book-list">
                {data
                    .map((book) => (
                        <div className="book-card" key={book.id}>
                            <img src={book.image} alt={book.title} className="book-image"/>
                            <h3 className="book-title">
                                {book.title} by {book.author}
                            </h3>
                            <h5>{book.currency} {book.price}</h5>
                            <p>Rating: {book.rating}</p>
                            <p 
                                className={book.availability === 'In Stock' 
                                    ? 'availability in-stock' 
                                    : 'availability out-of-stock'}
                            >
                                Availability: {book.availability}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AllBooks

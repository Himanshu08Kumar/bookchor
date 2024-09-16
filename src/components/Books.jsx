import React, { useState, useEffect } from 'react';
import topReads from "../../topReads.json";


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
            <h1 style={{
                color: "#022b3a",
                fontSize: "44px",
                fontWeight:"700",
                padding:"1rem 0"
            }}>Top Reads</h1>
            <div className="book-list">
                {data
                    .filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
                    .map((book) => (
                        <div className="book-card" key={book.id}>
                            <img src={book.image} alt={book.title} className="book-image"/>
                            <h3 className="book-title">
                                {book.title} by {book.author}
                            </h3>
                            <h5>{book.currency} {book.price}</h5>
                            <p>Rating: {book.rating} <span>({book.reviews})</span></p>
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

export default Books;

import React, { useState } from 'react';
import "./book-list.css";

import BookCard from '../../common-component/book-card/book-card';

const BookList = ({ books, year }) => {
    const [translateValue, setTranslateValue] = useState(0);
    const slideWidth = 25; // 한 슬라이드의 너비 (25%)
    const step = 25; // 이동 거리 (10%)

    const handlePrevClick = () => {
        if (translateValue < 0) {
            setTranslateValue(translateValue + step);
        }
    };

    const handleNextClick = () => {
        if (translateValue > -(100 - slideWidth)) {
            setTranslateValue(translateValue - step);
        }
    };

    return (
        <li key={year} className="book-list-wrapper">
            <h2><span className="book-list-title">{year}</span></h2>
            <div className="book-list-container">
                <div className='slider' style={{ transform: `translateX(${translateValue}%)`, transition: 'transform 0.5s ease' }}>
                    {books.map((book, index) => (
                        <BookCard key={index} book={book}/>
                    ))}
                </div>
                <button className="prev" onClick={handlePrevClick}>❮</button>
                <button className="next" onClick={handleNextClick}>❯</button>
            </div>
            <hr className='shelf'/>
        </li>
    );
};

export default BookList;

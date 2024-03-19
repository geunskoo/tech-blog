import React, { useState } from 'react';
import "./book-card.css";

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BookModal from '../book-modal/book-modal';

const BookCard = ({ book }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const thumbnail = getImage(book.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData);
  
  const openModal = () => {
    setIsModalOpen(true);
    setIsClicked(true);
  };

  const closeModal = () => {
    console.log("닫자");
    setIsModalOpen(false);
    setIsClicked(false);
  };

  return (
    <div className="book-card-wrapper" onClick={openModal}>
        <article className={`book-card-article ${isClicked ? 'clicked' : ''}`} itemScope itemType="http://schema.org/Article" >                      
            <GatsbyImage image={thumbnail} alt="thumbnail" style={{ position:"relative", zIndex: "10", width: "130px", height: "195px", border: "solid 0.5px black", boxShadow: "0 4px 8px var(--color-deep-gray)"}}/>
        </article>
        <BookModal isOpen={isModalOpen} onClose={closeModal} book={book}/>
    </div>
  );
};

export default BookCard;
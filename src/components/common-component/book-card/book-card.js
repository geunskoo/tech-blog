import React, { useState } from 'react';
import "./book-card.css";

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BookModal from '../book-modal/book-modal';

const BookCard = ({ book }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const thumbnail = getImage(book.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="book-card-wrapper" onClick={openModal}>
        <article className="book-card-article" itemScope itemType="http://schema.org/Article" >                      
            <GatsbyImage image={thumbnail} alt="thumbnail" style={{ zIndex: "1", width: "130px", height: "195px", border: "solid 0.5px black", transform: "rotateY(-10deg) rotateX(15deg)", boxShadow: "6px 1px 0 0 var(--color-gray)"}}/>
        </article>
        <BookModal isOpen={isModalOpen} onClose={closeModal} book={book}/>
    </div>
  );
};

export default BookCard;
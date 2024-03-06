// BookModal.js
import React from 'react';
import ReactDOM from 'react-dom';
import "./book-modal.css";
import { Link } from 'gatsby';

const BookModal = ({ isOpen, onClose, book }) => {

  const title = book.frontmatter.title;
  const date = book.frontmatter.date;
  const score = book.frontmatter.score;

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="book-modal-overlay" onClick={onClose}>
      <div className="book-modal" onClick={(e) => e.stopPropagation()}>
        <button className="book-modal-close" onClick={onClose}>x</button>
        <h2 className='book-modal-title'>{title}</h2>
        <div className='book-modal-content'>
          <p>독서 일시 : {date}</p>
          <p>추천도 : {'⭐️'.repeat(Number(score))}</p>
        </div>
        <div className='move-button-container'>
          <Link className="move-button" to={book.fields.slug} itemProp="url">독후감보기</Link>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BookModal;

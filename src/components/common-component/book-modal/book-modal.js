import React from 'react';
import ReactDOM from 'react-dom';
import "./book-modal.css";
import { Link } from 'gatsby';

const BookModal = ({ isOpen, onClose, book }) => {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onClose();
    }
  };

  const title = book.frontmatter.title;
  const date = book.frontmatter.date;
  const score = book.frontmatter.score;

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div 
      className="book-modal-overlay" 
      onKeyDown={handleKeyDown} // 키보드 이벤트 핸들러 추가
      tabIndex="-1" // 모달 백그라운드가 키보드로 탐색 가능하게 함
      role="presentation" // 모달의 배경에 적절한 역할 추가
      onClick={(e) => e.stopPropagation()}
    >
      <div 
        className="book-modal" 
        role="dialog" // 대화형 컨텐츠에 대한 역할 추가
        aria-modal="true" // 스크린 리더가 모달이 열렸음을 인지할 수 있게 함
        aria-labelledby="bookModalTitle" // 스크린 리더에게 제목을 알림
      >
        <div className="book-modal-close" role="button" onClick={onClose} onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Space") {
            onClose();
          }
        }}
        tabIndex="0" 
        aria-label="close" 
        >x</div>
        <h2 id="bookModalTitle" className='book-modal-title'>{title}</h2>
        <div className='book-modal-content'>
          <p>독서일 : {date}</p>
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

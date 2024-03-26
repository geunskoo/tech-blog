import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className='modal-outerlayer' onClick={onClose} onKeyDown={handleKeyDown} role="button" tabIndex="0" aria-label="Close modal">
      <div className='modal-wrapper' onClick={(e) => e.stopPropagation()}>
        {children}
        <button className='modal-close' onClick={onClose}>x</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

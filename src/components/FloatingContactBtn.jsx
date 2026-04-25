import React from 'react';

export default function FloatingContactBtn({ onClick }) {
  return (
    <button 
      className="floating-contact-btn" 
      onClick={onClick}
      title="Leave a message"
    >
      <span className="icon">💬</span>
    </button>
  );
}

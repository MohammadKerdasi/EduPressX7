import React, { useState, useRef, useEffect } from 'react';
import './CourseSingleAccordions.css'

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="Mk-accordion">
      <div className="Mk-accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      <div ref={contentRef} className={`Mk-accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;

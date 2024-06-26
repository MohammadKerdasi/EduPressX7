// PaginationReviews.js
import React from "react";
import "./PaginationReviews.css";

const PaginationReviews = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination-reviews">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
       
      </button>
    </div>
  );
};

export default PaginationReviews;
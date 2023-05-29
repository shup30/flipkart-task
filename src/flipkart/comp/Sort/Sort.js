import React from "react";

const Sort = ({ handleLowToHigh, handleHighToLow, clearSorts }) => {
  return (
    <div className="sort-by-row">
      <span className="sort-by-label">Sort By:</span>
      <button className="sort-option" onClick={clearSorts}>Relevance</button>
      <button className="sort-option" onClick={handleLowToHigh}>Price - Low to High</button>
      <button className="sort-option" onClick={handleHighToLow}>Price High to Low</button>
    </div>)
};

export default Sort;

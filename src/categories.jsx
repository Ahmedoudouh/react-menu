import React from "react";
const Categories = ({ filterItems, darckMode }) => {
  return (
    <div className="btn-container">
      <button
        className={darckMode === true ? "white filter-btn" : "black filter-btn"}
        style={{ background: darckMode === false ? "white" : "black" }}
        onClick={() => filterItems("all")}
      >
        all
      </button>
      <button
        className={darckMode === true ? "white filter-btn" : "black filter-btn"}
        style={{ background: darckMode === false ? "white" : "black" }}
        onClick={() => filterItems("breakfast")}
      >
        breakfast
      </button>
      <button
        className={darckMode === true ? "white filter-btn" : "black filter-btn"}
        style={{ background: darckMode === false ? "white" : "black" }}
        onClick={() => filterItems("lunch")}
      >
        lunch
      </button>
      <button
        className={darckMode === true ? "white filter-btn" : "black filter-btn"}
        style={{ background: darckMode === false ? "white" : "black" }}
        onClick={() => filterItems("shakes")}
      >
        shakes
      </button>
    </div>
  );
};

export default Categories;
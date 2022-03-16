import React from "react";
const Menu = ({ data, darckMode }) => {
  return (
    <div className="section-center">
      {data.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4 style={{ color: darckMode === true ? "white" : "black" }}>
                  {title}
                </h4>
                <h4
                  style={{ color: darckMode === true ? "white" : "black" }}
                  className="price"
                >
                  {price}
                </h4>
              </header>
              <p
                style={{ color: darckMode === true ? "white" : "black" }}
                className="item-text"
              >
                {desc}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
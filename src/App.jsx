import "./styles.css";
import Menu from "./menu";
import Categories from "./categories";
import items from "./data";
import React, { useState } from "react";
export default function App() {
  const [darckMode, setDarckMode] = useState(false);
  const [menuItems, setMenuItems] = useState(items);
  function modeDarck() {
    if (darckMode) {
      setDarckMode(false);
    } else {
      setDarckMode(true);
    }
  }

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    //console.log(newItems);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section
        className="margin"
        style={{ background: darckMode === false ? "white" : "black" }}
      >
        <div
          className="title"
          style={{ color: darckMode === false ? "black" : "white" }}
        >
            {" "}
            <h2> our menu</h2>
            <h5 className="small-title"> Restaurant Ahmed</h5>
          <div className="underline"></div>
          <button
            style={{
              background: darckMode === true ? "black" : "white",
              color: darckMode === true ? "white" : "black",
            }}
            className="mode-darck"
            onClick={modeDarck}
          >
            <div
              style={{
                background: darckMode === true ? "white" : "black",
              }}
              className="color-mode"
            ></div>
            mode
          </button>
        </div>

        <Categories filterItems={filterItems} darckMode={darckMode} />
        <Menu data={menuItems} darckMode={darckMode} />
      </section>
    </main>
  );
}

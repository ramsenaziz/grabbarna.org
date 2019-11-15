import React from "react";
import db from "./db.json";

const menuItem = (category, i) => (
  <React.Fragment key={i}>
    <div className="row-card">
      <h3 className="row-title bold">{db.menu[category].title}</h3>
      {db.menu[category].items.map((item, i) => (
        <div key={i} className="row-container">
          <p>
            <span className="bold">{item.id && item.id}</span>
            {item.id !== "" ? <span className="bold">.</span> : null}
          </p>
          <p>
            <span className="bold">{item.name && item.name.toUpperCase()}</span>
          </p>
          <p>{item.description && item.description}</p>
          <p className="flex justify-end">
            <span className="bold">{item.price && item.price}</span>
            {item.price !== "" ? <span className="bold">:-</span> : null}
          </p>
        </div>
      ))}
    </div>
  </React.Fragment>
);

const menuItems = Object.keys(db.menu).map(menuItem);

export default function Menu() {
  return (
    <div className="section flex-column">
      <div className="flex-column">{menuItems}</div>
    </div>
  );
}

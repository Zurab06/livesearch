import React from "react";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="product_card">
      <div className="image">
        {" "}
        <img className="img" src={item.src} alt="" />{" "}
      </div>
      <div className="main-text">
        <div className="brand">
          {item.name}
          <button className="details">детали</button>
          <div className="price">{item.price}</div>
        </div>
        <div className="description">{item.text}</div>
        <button className="add">добавить</button>
      </div>
    </div>
  );
};

export default Card;

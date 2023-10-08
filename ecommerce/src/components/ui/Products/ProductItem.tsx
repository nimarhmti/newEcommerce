import React from "react";
import { Props } from "./item.interface";

export const ProductItem = ({ id, price, title, image }: Props) => {
  return (
    <div
      className="card col-sm-12 col-md-4 col-lg-3 p-3"
      style={{ width: "18rem" }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{
          width: "100%",
          height: "300px",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.substring(0, 10)}</h5>
        <p className="card-text">{price}$</p>
        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  );
};

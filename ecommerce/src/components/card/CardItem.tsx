import React from "react";
import { Props } from "./CardItem.interface";
import { useCardContext } from "../../context/CardSection";

export const CardItem = ({
  id,
  image,
  price,
  title,
  ItemTotalPrice,
  amount,
}: Props) => {
  const { addToCard, removeFromCard } = useCardContext();
  const itemInfo = {
    id,
    image,
    price,
    title,
    ItemTotalPrice,
    amount,
  };
  return (
    <div className="card mb-3 col-sm-12" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4 p-2">
          <img
            src={image}
            style={{
              width: "350px",
              height: "250px",
            }}
            className="img-fluid rounded-start"
            alt={title.substring(0, 10)}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title.substring(0, 10)}</h5>
            <p className="card-text">total price : {ItemTotalPrice}$</p>
            <p className="card-text">price: {price}$</p>
            <p className="card-text">
              <small className="text-muted">amount :{amount}X </small>
            </p>
            <div>
              <button
                className="btn btn-danger me-2"
                onClick={() => removeFromCard(id, price)}
              >
                -
              </button>
              <button
                className="btn btn-success"
                onClick={() => addToCard(itemInfo)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

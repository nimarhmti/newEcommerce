import React from "react";
import { CardItem } from "./CardItem";
import { useCardContext } from "../../context/CardSection";

export const CardShop = () => {
  const { data } = useCardContext();
  return (
    <div className="row d-flex align-items-center justify-content-center gap-3">
      <div className="m-3">
        <h3>total price: {data.totalPrice}$</h3>
        <h4>total Amount: {data.totalAmount}X</h4>
      </div>
      {data.totalAmount ? (
        data.cardItem.map((item) => <CardItem {...item} key={item.id} />)
      ) : (
        <p>isempty</p>
      )}
    </div>
  );
};

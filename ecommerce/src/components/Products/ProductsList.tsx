import React from "react";
import { ProductItem } from "../ui/Products/ProductItem";
import { useFetch } from "../../hooks/useFetch";
import { LoadingScreen } from "../ui/Loading/Loading";
import { productModel } from "./Products.interface";

export const ProductsList = () => {
  const { data, isLoading } = useFetch("/products");
  if (isLoading) return <LoadingScreen />;
  return (
    <div className="row d-flex align-items-center justify-content-center gap-3">
      {data.map((item: productModel) => (
        <ProductItem
          id={item?.id}
          image={item.image}
          price={item.price}
          title={item.title}
          key={item.id}
        />
      ))}
    </div>
  );
};

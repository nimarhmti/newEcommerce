import React from "react";
import { ProductItem } from "../ui/Products/ProductItem";
import { useFetch } from "../../hooks/useFetch";
import { LoadingScreen } from "../ui/Loading/Loading";
import { productModel } from "./Products.interface";
import { useGlobalProducts } from "../../context/ProductsSection";
import { searchByName } from "../../utils/search";
import { useCardContext } from "../../context/CardSection";
import { sortbyPrice } from "../../utils/Sort";

interface Props {
  data: productModel[];
}

export const ProductsList = ({ data }: Props) => {
  const { filter } = useGlobalProducts();
  return (
    <div className="row d-flex align-items-center justify-content-center gap-3">
      {sortbyPrice(data, filter.sortBy).map((item: productModel) => (
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

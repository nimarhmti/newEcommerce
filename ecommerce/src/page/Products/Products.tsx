import React from "react";
import { ProductsList } from "../../components/Products/ProductsList";
import { Option } from "../../components/Products/Option";
import { useCardContext } from "../../context/CardSection";
import { useGlobalProducts } from "../../context/ProductsSection";
import { useFetch } from "../../hooks/useFetch";
import { searchByName } from "../../utils/search";

export default function Products() {
  const { data, filter } = useGlobalProducts();
  return (
    <div className="mt-5 container h-100">
      <div className="w-100 p-3 row">
        <h2 className="col-sm-12 col-md-6">Products</h2>
        <Option />
      </div>
      <ProductsList data={searchByName(data, filter.query)} />
    </div>
  );
}

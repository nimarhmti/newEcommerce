import { productModel } from "../components/Products/Products.interface";

export const searchByName = (list: productModel[], query: string) => {
  return list?.filter((item: productModel) => {
    return query.toLowerCase() === ""
      ? item
      : item.title.toLowerCase().substring(0, 10).includes(query);
  });
};

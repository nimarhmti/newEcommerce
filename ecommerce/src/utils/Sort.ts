import { productModel } from "../components/Products/Products.interface";
import { sortKey } from "../keys/enums";

export const sortbyPrice = (list: productModel[], key: string) => {
  console.log(key);
  switch (key) {
    case sortKey.DESCENDING:
      return list.sort((a, b) => a.price - b.price);
      break;
    case sortKey.ASCENDING:
      return list.sort((a, b) => b.price - a.price);
      break;
    default:
      return list;
      break;
  }
};

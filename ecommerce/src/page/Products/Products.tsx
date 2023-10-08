import { ProductsList } from "../../components/Products/ProductsList";
import { Option } from "../../components/Products/Option";

export default function Products() {
  return (
    <div className="mt-5 container bg-primary">
      <div className="w-100 p-3 row">
        <h2 className="col-sm-12 col-md-6">Products</h2>
        <Option />
      </div>
      <ProductsList />
    </div>
  );
}

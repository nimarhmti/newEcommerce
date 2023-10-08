import { useEffect } from "react";
import Router from "./config/routes";
import { useFetch } from "./hooks/useFetch";
import { useGlobalProducts } from "./context/ProductsSection";

function App() {
  const { data, setData } = useGlobalProducts();
  const { data: products } = useFetch("/products");
  useEffect(() => {
    setData(products);
  }, [products]);
  return <Router />;
}

export default App;

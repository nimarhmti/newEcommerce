import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { productModel } from "../components/Products/Products.interface";
import { sortKey } from "../keys/enums";
import { sortbyPrice } from "../utils/Sort";
import { useFetch } from "../hooks/useFetch";

type datatype = productModel[] | [];
type filterType = {
  query: string;
  sortBy: string;
};
interface contextProps {
  data: datatype;
  filter: filterType;
  setFilter: Dispatch<SetStateAction<filterType>>;
}

const GlobalProductsContext = createContext<contextProps>({
  data: [],
  filter: {
    query: "",
    sortBy: sortKey.NONE,
  },
  setFilter: (): filterType => ({ query: "", sortBy: "" }),
});
const initialValues = {
  query: "",
  sortBy: "",
};

export const GlobalProductsContextProvider = ({ children }: any) => {
  const [data, setData] = useState<datatype>([]);
  const [filter, setFilter] = useState(initialValues);
  const { data: products } = useFetch("/products");
  useEffect(() => {
    setData(products);
  }, [products]);

  return (
    <GlobalProductsContext.Provider value={{ data, setFilter, filter }}>
      {children}
    </GlobalProductsContext.Provider>
  );
};
export const useGlobalProducts = () => useContext(GlobalProductsContext);

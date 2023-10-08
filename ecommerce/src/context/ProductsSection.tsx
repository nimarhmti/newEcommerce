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

type datatype = productModel[] | [];
type filterType = {
  query: string;
  sortBy: string;
};
interface contextProps {
  data: datatype;
  filter: filterType;
  setData: Dispatch<SetStateAction<productModel[]>>;
  setFilter: Dispatch<SetStateAction<filterType>>;
}

const GlobalProductsContext = createContext<contextProps>({
  data: [],
  filter: {
    query: "",
    sortBy: sortKey.NONE,
  },
  setData: (): productModel[] => [],
  setFilter: (): filterType => ({ query: "", sortBy: "" }),
});
const initialValues = {
  query: "",
  sortBy: "",
};

export const GlobalProductsContextProvider = ({ children }: any) => {
  const [data, setData] = useState<datatype>([]);
  const [filter, setFilter] = useState(initialValues);
  useEffect(() => {
    setData(sortbyPrice(data, filter.sortBy));
  }, [filter.sortBy, data]);

  return (
    <GlobalProductsContext.Provider
      value={{ setData, data, setFilter, filter }}
    >
      {children}
    </GlobalProductsContext.Provider>
  );
};
export const useGlobalProducts = () => useContext(GlobalProductsContext);

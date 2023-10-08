import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useMemo,
} from "react";
import { productModel } from "../components/Products/Products.interface";

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
    sortBy: "",
  },
  setData: (): productModel[] => [],
  setFilter: (): filterType => ({ query: "", sortBy: "" }),
});

export const GlobalProductsContextProvider = ({ children }: any) => {
  const [data, setData] = useState<datatype>([]);
  const [filter, setFilter] = useState({
    query: "",
    sortBy: "",
  });
  return (
    <GlobalProductsContext.Provider
      value={{ setData, data, setFilter, filter }}
    >
      {children}
    </GlobalProductsContext.Provider>
  );
};
export const useGlobalProducts = () => useContext(GlobalProductsContext);

import { useContext, createContext, useState, useMemo } from "react";
export interface addToShopModel {
  id: number;
  title: string;
  price: number;
  image: string;
  ItemTotalPrice: number;
  amount: number;
}

interface CardModel {
  totalAmount: number;
  totalPrice: number;
  cardItem: addToShopModel[] | [];
}

interface contextProps {
  data: CardModel;
  addToCard: (item: addToShopModel) => void;
  removeFromCard: (id: number, price: number) => void;
}

const initialValues: CardModel = {
  totalAmount: 0,
  totalPrice: 0,
  cardItem: [],
};
const GlobalCardShopContext = createContext<contextProps>({
  data: initialValues,
  removeFromCard: (id: number, price: number) => null,
  addToCard: (item: addToShopModel) => null,
});

export const GlobalCardShopProvider = ({ children }: any) => {
  const [data, setDate] = useState<CardModel>(initialValues);

  // add to card shop function

  const addToCard = (item: addToShopModel) => {
    //first of all find existing item
    const existingItem = data.cardItem.find((product) => product.id == item.id);
    let updatedList = {
      ...data,
      totalAmount: ++data.totalAmount,
      totalPrice: data.totalPrice + item.price,
    };
    //check existing item
    if (existingItem) {
      const findItem = data.cardItem.findIndex(
        (product) => product.id == existingItem.id
      );
      const updatedCardList = data.cardItem;
      // update existing item
      updatedCardList[findItem] = {
        ...updatedCardList[findItem],
        amount: ++existingItem.amount,
        ItemTotalPrice: updatedCardList[findItem].ItemTotalPrice + item.price,
      };
      // set into new object
      updatedList = {
        ...updatedList,
        cardItem: updatedCardList,
      };
    } else {
      updatedList = {
        ...updatedList,
        cardItem: [
          ...data.cardItem,
          {
            ...item,
            amount: 1,
            ItemTotalPrice: item.price,
          },
        ],
      };
    }
    setDate(updatedList);
  };

  // remove from card function
  const removeFromCard = (id: number, ItemPrice: number) => {
    //first of check total amount
    if (data.totalAmount == 0) return;
    else {
      let updatedList: CardModel = {
        ...data,
        totalAmount: --data.totalAmount,
        totalPrice: data.totalPrice - ItemPrice,
      };
      const findIndexItem = data.cardItem.findIndex(
        (product) => product.id == id
      );
      let updatedCardList = data.cardItem;
      const selectedItem = updatedCardList[findIndexItem];
      let { amount } = selectedItem;
      //check amount of existing item to remove
      if (amount > 1) {
        //more than one item so decrease one of them
        updatedCardList[findIndexItem] = {
          ...selectedItem,
          amount: --amount,
          ItemTotalPrice:
            updatedCardList[findIndexItem].ItemTotalPrice - ItemPrice,
        };
        updatedList = {
          ...updatedList,
          cardItem: updatedCardList,
        };
      } else {
        // 1 item exist so remove from  list

        updatedCardList = updatedCardList.filter(
          (cardItem) => cardItem.id != id
        );

        updatedList = {
          ...updatedList,
          cardItem: updatedCardList,
        };
      }
      setDate(updatedList);
    }
  };

  const value = useMemo(
    () => ({
      data,
      addToCard,
      removeFromCard,
    }),
    [data, removeFromCard, addToCard]
  );

  return (
    <GlobalCardShopContext.Provider value={value}>
      {children}
    </GlobalCardShopContext.Provider>
  );
};

export const useCardContext = () => useContext(GlobalCardShopContext);

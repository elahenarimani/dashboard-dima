import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

import { data } from "../constants/orderData";
import type { Order } from "../types/orderList";

interface OrderContextType {
  listData: Order[];
  setListData: Dispatch<SetStateAction<Order[]>>;
}

const OrderContext = createContext<OrderContextType | null>(
  null
);


export const OrderProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [listData, setListData] = useState<Order[]>(data);

  return (
    <OrderContext.Provider
      value={{ listData, setListData }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error(
      "useOrders must be used inside OrderProvider"
    );
  }

  return context;
};


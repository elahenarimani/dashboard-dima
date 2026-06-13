import {  useState, type Dispatch, type SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ORDER_TYPES } from "../../../../../constants/orderData";
import {
  ORDER_STATUSES,
  type ActiveModal,
  type Order,
  type OrderStatus,
  type OrderType,
} from "../../../../../types/orderList";

import Button from "../../../../kit/Button";
type FilterModalProps = {
  activeModal: ActiveModal;
  onClose: () => void;

  // onApply: (filters: {
  //   date: Date | null;
  //   type: OrderType | null;
  //   status: OrderStatus | null;
  // }) => void;

  selectedValue: {
    date: string | null;
    type: OrderType | null;
    status: OrderStatus | null;
  };

  // selectedDate: Date | null;
  setListData: Dispatch<SetStateAction<Order[]>>;

  // selectedType: OrderType | null;
  // setSelectedType: Dispatch<SetStateAction<OrderType | null>>;

  // selectedStatus: OrderStatus | null;
  // setSelectedStatus: Dispatch<SetStateAction<OrderStatus | null>>;
  listData:Order[];
  selectedOrder:Order;
  setActiveModal:ActiveModal;
};

const FilterModal = ({
  activeModal,
  onClose,
  // onApply,
  listData,
  setActiveModal,
  setListData,
  selectedOrder
}: FilterModalProps) => {
   const [selectedDate, setSelectedDate] = useState<Date|null>(null);
   const [selectedType, setSelectedType] = useState<OrderType|null>(null);
   const [selectedStatus, setSelectedStatus] = useState<OrderStatus|null>(null);
const handleApply = () => {
  if (!selectedOrder) return;

  setListData((prev) =>
    prev.map((order) =>
      order.id === selectedOrder.id
        ? {
            ...order,
            status: selectedStatus ?? order.status,
            type: selectedType ?? order.type,
            date: selectedDate
              ? selectedDate.toLocaleDateString("en-CA")
              : order.date,
          }
        : order
    )
  );

  setActiveModal(null);
};
  if (!activeModal) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 z-50 min-w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl border border-(--color-border)">
        <div className="flex items-center justify-between border-b border-(--color-border) p-4">
          <h3 className="font-bold">
            {activeModal === "date" && "Date Filter"}
            {activeModal === "type" && "Order Type"}
            {activeModal === "status" && "Order Status"}
          </h3>

          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        <div className="p-4">
         
          {activeModal === "date" && (
            <div className="flex flex-col gap-2">
              <div className="w-full h-[265px] flex justify-center">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  inline
                />
              </div>
            </div>
          )}

          {activeModal === "type" && (
            <div className="flex flex-col gap-2">
              {ORDER_TYPES.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedType(item)}
                  className={`rounded-lg p-2 hover:bg-gray-100 ${
                    selectedType === item ? "bg-blue-100" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          {activeModal === "status" && (
            <div className="flex flex-col gap-2">
              {ORDER_STATUSES.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`rounded-lg p-2 hover:bg-gray-100 ${
                    selectedStatus === status ? "bg-blue-100" : ""
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          )}
          <div className="w-full flex justify-center items-center">
            {/* <Button className="mt-10" color={"primary"}>Apply Now</Button> */}
            <Button
              className="w-[150px] mt-10"
              variant="contained"
              onClick={() => {
              handleApply()
                onClose();
              }}
            >
              Apply Now
            </Button>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default FilterModal;

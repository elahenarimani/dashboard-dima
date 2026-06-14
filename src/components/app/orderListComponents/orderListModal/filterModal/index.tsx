import { type Dispatch, type SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ORDER_TYPES } from "../../../../../constants/orderData";
import {
  ORDER_STATUSES,
  type ActiveModal,
  type IFormState,
  type Order,
  type OrderStatus,
  type OrderType,
} from "../../../../../types/orderList";

import Button from "../../../../kit/Button";
type FilterModalProps = {
  activeModal: ActiveModal;
  onClose: () => void;
  setListData: Dispatch<SetStateAction<Order[]>>;

  listData: Order[];
  formState: IFormState;
  setFormState: React.Dispatch<React.SetStateAction<IFormState>>;

  setActiveModal: Dispatch<SetStateAction<ActiveModal>>;
  selectedOrder: Order | null;
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | null>>;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedType: OrderType[];
  setSelectedType: React.Dispatch<React.SetStateAction<OrderType[] | null>>;
  selectedStatus: OrderStatus[];
  setSelectedStatus: React.Dispatch<React.SetStateAction<OrderStatus[] | null>>;
};
const FilterModal = ({
  activeModal,
  onClose,
  // selectedDate,
  // setSelectedDate,
  // selectedType,
  // setSelectedType,
  // selectedStatus,
  // setSelectedStatus,
  listData,
  formState,
  setFormState,
  // setSelectedOrder,
  setActiveModal,
  setListData,
  selectedOrder,
}: FilterModalProps) => {
  console.log("selectedOrderbefore", selectedOrder);
  const handleTypeSelect = (type: OrderType) => {
    setFormState((prev) => ({
      ...prev,
      type: prev.type.includes(type)
        ? prev.type.filter((t) => t !== type)
        : [...prev.type, type],
    }));
  };
  const handleApply = () => {
    if (!formState.order) return;

    setListData((prev) =>
      prev.map((item) =>
        item.id === formState.order!.id
          ? {
              ...item,
              date: formState.date
                ? formState.date.toISOString().split("T")[0]
                : item.date,
              type: formState.type,
              status: formState.status,
            }
          : item,
      ),
    );

    setActiveModal(null);
    setFormState({
      date: null,
      type: [],
      status: [],
      order: null,
    });
  };
  // const handleApply = () => {
  //   if (!selectedOrder) return;
  //   setListData((prev) =>
  //     prev.map((order) =>
  //       order.id === selectedOrder.id
  //         ? {
  //             ...order,
  //             status: selectedStatus ?? order.status,
  //             type: selectedType ?? order.type,
  //             date: selectedDate
  //               ? selectedDate.toLocaleDateString("en-US", {
  //                   year: "numeric",
  //                   month: "long",
  //                   day: "numeric",
  //                   numberingSystem: "latn",
  //                 })
  //               : order.date,
  //           }
  //         : order,
  //     ),
  //   );
  //   setSelectedOrder(null);
  //   setSelectedDate(null);
  //   setActiveModal(null);
  //   setSelectedType(null);
  //   setSelectedStatus(null);
  // };
  console.log("selectedOrderafter", selectedOrder);
  console.log("listData", listData);
  const handleTypeSelect = (type: OrderType) => {
    setSelectedType((prev) =>
      prev?.includes(type)
        ? prev?.filter((item) => item !== type)
        : [...prev, type],
    );
  };
  if (!activeModal) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 z-50 min-w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl border border-(--color-border)">
        <div className="flex  items-center justify-between  p-4">
          <h3 className="font-bold">
            {activeModal === "date" && "Date Filter"}
            {activeModal === "type" && "Order Type"}
            {activeModal === "status" && "Order Status"}
          </h3>

          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        <div className="py-4">
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
            <div className="grid grid-cols-3 gap-2 p-4">
              {ORDER_TYPES.map((item: OrderType) => (
                <Button
                  key={item}
                  onClick={() => handleTypeSelect(item)}
                  color={selectedType?.includes(item) ? "brand" : "secondary"}
                  size="sm"
                  className="rounded-2xl p-2"
                  variant={
                    selectedType?.includes(item) ? "contained" : "outlined"
                  }
                >
                  {item}
                </Button>
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
          <p className="text-sm text-(--color-primary) font-normal border-t px-5 border-(--color-border) pt-5">
            *You can choose multiple Order type
          </p>
          <div className="w-full flex justify-center items-center">
            <Button
              className="w-[150px] mt-10"
              variant="contained"
              onClick={() => {
                handleApply();
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

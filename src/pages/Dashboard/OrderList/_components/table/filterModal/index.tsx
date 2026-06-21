import DatePicker from "react-datepicker";
import { type Dispatch, type SetStateAction } from "react";
import "react-datepicker/dist/react-datepicker.css";

import {
  type ActiveModalType,
  type IFormState,
  type OrderStatus,
  type OrderType,
} from "../../../../../../types/orderList";

import Button from "../../../../../../components/kit/Button";

import { useOrders } from "../../../../../../context/OrderContext";

import { ORDER_STATUSES, ORDER_TYPES } from "../../../../../../constants/orderData";
import "./filterModal.css";

type FilterModalTypes = {
  activeModal: ActiveModalType;
  onClose: () => void;
  formState: IFormState;
  setFormState: React.Dispatch<React.SetStateAction<IFormState>>;
  setActiveModal: Dispatch<SetStateAction<ActiveModalType>>;
};

const FilterModal = ({
  activeModal,
  onClose,
  formState,
  setFormState,
  setActiveModal,
}: FilterModalTypes) => {
  const { setListData } = useOrders();
  const handleTypeSelect = (type: OrderType) => {
    setFormState((prev) => ({
      ...prev,
      type: prev.type.includes(type)
        ? prev.type.filter((t) => t !== type)
        : [...prev.type, type],
    }));
  };
  const handleStatusSelect = (status: OrderStatus) => {
    setFormState((prev) => ({
      ...prev,
      status: prev.status.includes(status)
        ? prev.status.filter((t) => t !== status)
        : [...prev.status, status],
    }));
  };
  const handleApply = () => {
    if (!formState.order) return;

    setListData((prev) =>
      prev.map((item) =>
        item.id === formState.order!.id
          ? {
              ...item,
              date: formState.date ?? item.date,
              type: formState.type,
              status: formState.status,
            }
          : item,
      ),
    );

    setFormState({
      date: null,
      type: [],
      status: [],
      order: null,
    });
    setActiveModal(null);
  };
  console.log("formState:", formState);
  if (!activeModal) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 z-50 min-w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl border border-(--color-border)">
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
                  selected={formState.date}
                  onChange={(date: Date | null) =>
                    setFormState((prev) => ({
                      ...prev,
                      date,
                    }))
                  }
                  inline
                  peekNextMonth={false}
                />
              </div>
            </div>
          )}

          {activeModal === "type" && (
            <div className="w-full grid grid-cols-3 gap-2 p-4">
              {ORDER_TYPES.map((item: OrderType) => (
                <Button
                  key={item}
                  onClick={() => handleTypeSelect(item)}
                  color={formState.type.includes(item) ? "brand" : "secondary"}
                  variant={
                    formState.type.includes(item) ? "contained" : "outlined"
                  }
                  size="sm"
                  className="rounded-2xl "
                >
                  {item}
                </Button>
              ))}
            </div>
          )}

          {activeModal === "status" && (
            <div className="min-w-full grid grid-cols-3 gap-2 p-4">
              {ORDER_STATUSES.map((item: OrderStatus) => (
                <Button
                  key={item}
                  onClick={() => handleStatusSelect(item)}
                  color={
                    formState.status.includes(item) ? "brand" : "secondary"
                  }
                  variant={
                    formState.status.includes(item) ? "contained" : "outlined"
                  }
                  size="sm"
                  className="rounded-2xl "
                >
                  {item}
                </Button>
              ))}
            </div>
          )}

          {activeModal !== "date" && (
            <p className="text-sm text-(--color-primary) font-normal border-t px-5 border-(--color-border) pt-5">
              *You can choose multiple Order type
            </p>
          )}
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
    </div>
  );
};

export default FilterModal;

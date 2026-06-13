import { ORDER_TYPES } from "../../../../../constants/orderData";
import {
  ORDER_STATUSES,
  type ActiveModal,
} from "../../../../../types/orderList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Button from "../../../../kit/Button";
type FilterModalProps = {
  activeModal: ActiveModal;
  onClose: () => void;
};

const FilterModal = ({ activeModal, onClose }: FilterModalProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
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
            {/* {activeModal === "filter" && "Filter"}
            {activeModal === "sort" && "Sort By"} */}
          </h3>

          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        <div className="p-4">
          {/* {activeModal === "date" && (
            <div className="flex flex-col gap-2">
              <button className="rounded-lg p-2 hover:bg-gray-100">
                Today
              </button>
              <button className="rounded-lg p-2 hover:bg-gray-100">
                This Week
              </button>
              <button className="rounded-lg p-2 hover:bg-gray-100">
                This Month
              </button>
            </div>
          )} */}
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
                <button key={item} className="rounded-lg p-2 hover:bg-gray-100">
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
                  className="rounded-lg p-2 hover:bg-gray-100"
                >
                  {status}
                </button>
              ))}
            </div>
          )}
        <div className="w-full flex justify-center items-center">
            <Button className="mt-10" color={"primary"}>Apply Now</Button>
        </div>
        
          {/* {activeModal === "sort" && (
            <div className="flex flex-col gap-2">
              <button className="rounded-lg p-2 hover:bg-gray-100">
                Newest
              </button>
              <button className="rounded-lg p-2 hover:bg-gray-100">
                Oldest
              </button>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default FilterModal;

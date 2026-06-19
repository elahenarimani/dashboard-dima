import type React from "react";
import { useState } from "react";

import type {
  ActiveModalType,
  IFormState,
  Order,
  OrderStatus,
} from "@/types/orderList";

import FilterModal from "./filterModal";

interface ITableProps {
  paginatedData: Order[];
  activeModal: ActiveModalType;
  setActiveModal:React.Dispatch<React.SetStateAction<ActiveModalType>>;
}

const Table: React.FC<ITableProps> = ({ paginatedData  , activeModal ,setActiveModal}) => {
  const [formState, setFormState] = useState<IFormState>({
    date: null,
    type: [],
    status: [],
    order: null,
  });
  const statusStyles: Record<OrderStatus, string> = {
    Completed: "bg-[#CCF0EB] text-[#00B69B]",
    Processing: "bg-[#E0D4FC] text-[#6226EF]",
    Rejected: "bg-[#FDE7E5] text-[#C75B4A]",
    "On Hold": "bg-[#FFEDDD] text-[#C27A2C]",
    "In Transit": "bg-[#F1D4FF] text-[#9B4CC5]",
  };
  return (
    <div className="w-full h-[3/4] mt-5 rounded-2xl border border-(--color-border) overflow-hidden bg-white">
      <div className="h-full overflow-y-auto">
      <table className="w-full text-center bg-white">
        <thead>
          <tr>
            <th className="p-2 border-b border-b-(--color-border) w-[5%] font-extrabold text-sm">
              ID
            </th>
            <th className="p-2 border-b border-b-(--color-border) w-[5%] font-extrabold text-sm">
              NAME
            </th>
            <th className="p-2 border-b border-b-(--color-border) w-[25%] font-extrabold text-sm">
              ADDRESS
            </th>
            <th className="p-2 border-b border-b-(--color-border) w-[15%] font-extrabold text-sm">
              DATE
            </th>
            <th className="p-2 border-b border-b-(--color-border) w-[32.5%] font-extrabold text-sm">
              TYPE
            </th>
            <th className="p-2 border-b border-b-(--color-border) w-[27.5%] font-extrabold text-sm">
              STATUS
            </th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={item.id}
              className={`hover:bg-gray-50 ${
                index === paginatedData.length - 1
                  ? ""
                  : "border-b border-(--color-border)"
              }`}
            >
              <td className="py-3 font-semibold text-sm">{item.id}</td>
              <td className="py-3 font-semibold text-sm">{item.name}</td>
              <td className="py-3 font-semibold text-sm">{item.address}</td>
              <td
                className="py-3 cursor-pointer font-semibold text-sm hover:text-blue-600"
                onClick={() => {
                  setActiveModal("date");
                  setFormState({
                    date: item.date,
                    type: item.type,
                    status: item.status,
                    order: item,
                  });
                }}
              >
                {item.date.toDateString()}
              </td>

              <td
                className="py-3 cursor-pointer hover:text-blue-600 font-semibold text-sm px-2"
                onClick={() => {
                  setActiveModal("type");
                  setFormState({
                    date: item.date,
                    type: item.type,
                    status: item.status,
                    order: item,
                  });
                }}
              >
                {item.type.join(" • ")}
              </td>

              <td
                className="py-3 cursor-pointer font-semibold text-sm hover:text-blue-600"
                onClick={() => {
                  setActiveModal("status");
                  setFormState({
                    date: item.date,
                    type: item.type,
                    status: item.status,
                    order: item,
                  });
                }}
              >
                <div className="flex flex-wrap justify-center gap-2">
                  {item.status.map((status) => (
                    <span
                      key={status}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        statusStyles[status]
                      }`}
                    >
                      {status}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <FilterModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        onClose={() => setActiveModal(null)}
        formState={formState}
        setFormState={setFormState}
      />
    </div>
    </div>
  );
};

export default Table;

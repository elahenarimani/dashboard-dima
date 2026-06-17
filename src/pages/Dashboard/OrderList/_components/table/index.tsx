import type React from "react";
import type {
  ActiveModal,
  IFormState,
  Order,
  OrderStatus,
} from "../../../../../types/orderList";
import FilterModal from "./filterModal";
import { useState } from "react";

interface ITableProps {
  paginatedData: Order[];
}

const Table: React.FC<ITableProps> = ({ paginatedData }) => {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [formState, setFormState] = useState<IFormState>({
    date: null,
    type: [],
    status: [],
    order: null,
  });
  const statusStyles: Record<OrderStatus, string> = {
    Completed: "bg-[#CCF0EB] text-[#00B69B]",
    Processing: "bg-[#6226EF] text-[#4B1CC0]",
    Rejected: "bg-[#FDE7E5] text-[#C75B4A]",
    "On Hold": "bg-[#FFEDDD] text-[#C27A2C]",
    "In Transit": "bg-[#F1D4FF] text-[#9B4CC5]",
  };
  return (
    <div className="w-full h-[400px] mt-5 rounded-2xl border border-(--color-border) overflow-hidden bg-white">
      <table className="w-full text-center bg-white">
        <thead>
          <tr>
            <th className="p-2 border-b border-b-(--color-border) w-[5%]">
              ID
            </th>
            <th className="p-2 border-b border-b-(--color-border) w-[5%]">
              NAME
            </th>
            <th className="p-2 border-b border-b-(--color-border) w-[25%]">
              ADDRESS
            </th>
            <th className="p-2 border-b border-b-(--color-border) w-[15%]">
              DATE
            </th>
            <th className="p-2 border-b border-b-(--color-border) w-[32.5%]">
              TYPE
            </th>
            <th className="p-2 border-b border-b-(--color-border) w-[27.5%]">
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
              <td className="py-3">{item.id}</td>
              <td className="py-3">{item.name}</td>
              <td className="py-3">{item.address}</td>

              <td
                className="py-3 cursor-pointer hover:text-blue-600"
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
                className="py-3 cursor-pointer hover:text-blue-600 px-2"
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
                className="py-3 cursor-pointer hover:text-blue-600"
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
                {/* {item.status.join(" • ")} */}
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
  );
};

export default Table;

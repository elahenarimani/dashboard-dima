import type React from "react";
import type {
  ActiveModal,
  IFormState,
  Order,
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
  return (
    <div className="w-full h-[400px] mt-5 rounded-2xl border border-(--color-border) overflow-hidden bg-white">
      <table className="w-full text-center bg-white">
        <thead>
          <tr>
            <th className="p-2 border-b border-b-(--color-border)">ID</th>
            <th className="p-2 border-b border-b-(--color-border)">NAME</th>
            <th className="p-2 border-b border-b-(--color-border)">ADDRESS</th>
            <th className="p-2 border-b border-b-(--color-border)">DATE</th>
            <th className="p-2 border-b border-b-(--color-border)">TYPE</th>
            <th className="p-2 border-b border-b-(--color-border)">STATUS</th>
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
                {item.status.join(" • ")}
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

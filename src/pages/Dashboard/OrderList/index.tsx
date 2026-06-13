import { useState } from "react";

import type {
  ActiveModal,
  Order,
 
} from "../../../types/orderList";

import FilterItem from "../../../components/app/orderListComponents/filterItemProps";

import Filter from "../../../assets/icons/Filter.svg?react";
import ArrowDown from "../../../assets/icons/ArrowDown.svg?react";
import Reset from "../../../assets/icons/Reset.svg?react";
import FilterModal from "../../../components/app/orderListComponents/orderListModal/filterModal";
import { data } from "../../../../src/constants/orderData";

const OrderList: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  // const [selectedItem, setSelectedItem] = useState<{
  //   date: string | null;
  //   type: OrderType | null;
  //   status: OrderStatus | null;
  // }>({
  //   date: null,
  //   type: null,
  //   status: null,
  // });
  const [listData, setListData] = useState<Order[]>(data);
  const [selectedOrder, setSelectedOrder] = useState<Order>();


  console.log("listData", listData);
  // const filteredData = useMemo(() => {
  //   return data.filter((item) => {
  //     if (filters.type && item.type !== filters.type) return false;
  //     if (filters.status && item.status !== filters.status) return false;

  //     if (filters.date && item.date !== filters.date) return false;

  //     return true;
  //   });
  // }, [filters]);
  
  console.log("data", data);
  console.log("activeModal", activeModal);
  // console.log("filters:", filters);
  return (
    <div className="h-full bg-[#F9F9F9] flex flex-col justify-start items-start  px-5">
      <p className="text-(--color-text) font-bold text-3xl ">OrderList</p>

      <div className="mt-5 h-[40px] w-[818px] border border-(--color-border) rounded-2xl flex items-center justify-between">
        <div className="h-full flex items-center px-3 gap-5">
          <Filter className="text-(--color-svg) py-1" />
        </div>
        <div className="h-full border-r border-(--color-border)" />
        <div className="h-full flex items-center px-3 gap-5">
          <p className="font-bold text-sm whitespace-nowrap">Filter By</p>
        </div>
        <div className="h-full border-r border-(--color-border)" />
        {/* <div className="h-full flex items-center px-3 gap-5">
          <p
            className="font-bold text-sm whitespace-nowrap"
            onClick={() => setActiveModal("date")}
          >
            Date
          </p>
          <ArrowDown className=" text-(--color-svg)" />
        </div> */}

        <FilterItem
          label="Date"
          icon={<ArrowDown />}
          // type="date"
          // setActiveModal={setActiveModal}
        />
        <div className="h-full border-r border-(--color-border)" />
        {/* <div
          className="h-full flex items-center px-3 gap-5"
          onClick={() => setActiveModal("type")}
        >
          <p className="font-bold text-sm whitespace-nowrap">Order Type</p>
          <ArrowDown className=" text-(--color-svg)" />
        </div> */}

        <FilterItem
          label="Order Type"
          icon={<ArrowDown />}
          // type="type"
          // setActiveModal={setActiveModal}
        />
        <div className="h-full border-r border-(--color-border)" />
        {/* <div
          className="h-full flex items-center px-3 gap-5"
          onClick={() => setActiveModal("status")}
        >
          <p className="font-bold text-sm whitespace-nowrap">Order Status</p>
          <ArrowDown className=" text-(--color-svg)" />

        </div> */}
        <FilterItem
          label="Order Status"
          icon={<ArrowDown />}
          // type="status"
          // setActiveModal={setActiveModal}
        />
        <div className="h-full border-r border-(--color-border)" />
        <div className="h-full flex items-center px-3 gap-5">
          <p className="font-bold text-sm whitespace-nowrap text-[#EA0234]">
            Reset Filter
          </p>
          <Reset className=" text-[#EA0234]" />
          {/* <div className="h-full border-r border-(--color-border)" /> */}
        </div>
        <div className="h-full border-r border-(--color-border)" />
        <div className="h-full flex items-center px-3 gap-5">
          <p className="font-bold text-sm whitespace-nowrap">Sort By</p>
          <ArrowDown className=" text-(--color-svg)" />
        </div>
      </div>

      <div className="w-full mt-5 rounded-2xl border border-(--color-border) overflow-hidden">
        <table className="w-full text-center bg-white">
          <thead>
            <tr className="">
              <th className="p-2 border-b border-b-(--color-border)">ID</th>
              <th className="p-2 border-b border-b-(--color-border)">NAME</th>
              <th className="p-2 border-b border-b-(--color-border)">
                ADDRESS
              </th>
              <th className="p-2 border-b border-b-(--color-border)">DATE</th>
              <th className="p-2 border-b border-b-(--color-border)">TYPE</th>
              <th className="p-2 border-b  border-b-(--color-border)">
                STATUS
              </th>
            </tr>
          </thead>

          <tbody>
            {listData.map((item, index) => (
              <tr
                key={item.id}
                className={`hover:bg-gray-50  ${
                  index === data.length - 1
                    ? ""
                    : "border-b  border-(--color-border)"
                }`}
              >
                <td className="py-3">{item.id}</td>
                <td className="py-3">{item.name}</td>
                <td className="py-3">{item.address}</td>
                <td
                  className="py-3 cursor-pointer hover:text-blue-600"
                  // onClick={() => {
                  //   setActiveModal("date");
                  // }}
                      onClick={() => {
                    setSelectedOrder(item);
                    setActiveModal("date");
                  }}
                >
                  {item.date}
                </td>
                <td
                  className="py-3 cursor-pointer hover:text-blue-600"
                  // onClick={() => {
                  //   console.log("item.idtype", item.id);
                  //   // setSelectedItem((prev) => ({ ...prev, type: item.type }));
                  //   // setActiveModal("type");

                  //   setActiveModal("type");
                  // }}
                  onClick={() => {
                    setSelectedOrder(item);
                    setActiveModal("type");
                  }}
                >
                  {item.type}
                </td>
                <td
                  className="py-3 cursor-pointer hover:text-blue-600"
                  // onClick={() => {
                  //   console.log("item.idstatus", item.id);
                  //   // setSelectedItem((prev) => ({
                  //   //   ...prev,
                  //   //   status: item.status,
                  //   // }));
                  //   // setActiveModal("status");

                  //   setActiveModal("status");
                  // }}
                  onClick={() => {
                    setSelectedOrder(item);
                    setActiveModal("status");
                  }}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {activeModal === "date" && (
        <DateModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "type" && (
        <TypeModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "status" && (
        <StatusModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "sort" && (
        <SortModal onClose={() => setActiveModal(null)} />
      )} */}
      {/* <FilterModal
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      /> */}

      <FilterModal
        activeModal={activeModal}

        onClose={() => setActiveModal(null)}
        // onApply={(newValue) => {
        //   setFilters((prev) => ({
        //     ...prev,
        //     date: newValue.date ? newValue.date.toISOString() : prev.date,
        //     type: newValue.type ?? prev.type,
        //     status: newValue.status ?? prev.status,
        //   }));

        //   setActiveModal(null);
        // }}
        listData={listData}
        setListData={setListData}
        selectedOrder={selectedOrder}
        setActiveModal={setActiveModal}
      />
    </div>
  );
};
export default OrderList;

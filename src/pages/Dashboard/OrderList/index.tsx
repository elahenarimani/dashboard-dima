import { useMemo, useState } from "react";
import { useOrders } from "../../../context/OrderContext";
import type {
  // Order,
  // OrderStatus,
  // OrderType,
} from "../../../types/orderList";

// import Filter from "../../../assets/icons/Filter.svg?react";
// import ArrowDown from "../../../assets/icons/ArrowDown.svg?react";
// import Reset from "../../../assets/icons/Reset.svg?react";
// import SortAscendingCircle from "../../../assets/icons/SortAscendingCircle.svg?react";
// import ArrowLeft from "../../../assets/icons/arrowLeft.svg?react";
// import ArrowRight from "../../../assets/icons/arrowRight.svg?react";

import { data, itemsPerPage } from "../../../../src/constants/orderData";
// import Button from "../../../components/kit/Button";
// import FilterItem from "./_components/filterItemProps";
// import FilterModal from "./_components/orderListModal/filterModal";
import Table from "./_components/table";
import FilterBar from "./_components/filterBar";
import Pagination from "./_components/pagination";


const OrderList: React.FC = () => {
  const { listData, setListData } = useOrders();
  
  // const [listData, setListData] = useState<Order[]>(data);
  // const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // const [selectedType, setSelectedType] = useState<OrderType[] | null>();
  // const [selectedStatus, setSelectedStatus] = useState<OrderStatus[] | null>(
  //   null,
  // );
  const [page, setPage] = useState<number>(1);
 
  // console.log("formState", formState);
  const sortData = () => {
    setListData((prev) =>
      [...prev].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      ),
    );
  };

  // const totalPages = Math.ceil(listData.length / itemsPerPage);
  // const handlePrev = () => {
  //   if (page > 1) setPage(page - 1);
  // };

  // const handleNext = () => {
  //   if (page < totalPages) setPage(page + 1);
  // };

const paginatedData = useMemo(() => {
  return listData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
}, [listData, page]);

  // const paginatedData = listData.slice(
  //   (page - 1) * itemsPerPage,
  //   page * itemsPerPage,
  // );
  console.log("data", data);
  return (
    
      <div className="h-full bg-[#F9F9F9] flex flex-col justify-start items-start  px-5">
        <p className="text-(--color-text) font-bold text-3xl ">OrderList</p>

        <FilterBar onReset={() => setListData(data)} onSort={sortData} />

        <Table
          paginatedData={paginatedData}
          // setActiveModal={setActiveModal}
          // setFormState={setFormState}
        />

        <Pagination page={page} setPage={setPage} />

        {/* <div className="mt-5 h-[40px] w-[818px] border border-(--color-border) rounded-2xl flex items-center justify-between">
        <div className="h-full flex items-center px-3 gap-5">
          <Filter className="text-(--color-svg) " />
        </div>
        <div className="h-full border-r border-(--color-border)" />
        <div className="h-full flex items-center px-3 gap-5">
          <p className="font-bold text-sm whitespace-nowrap">Filter By</p>
        </div>
        <div className="h-full border-r border-(--color-border)" />

        <FilterItem label="Date" icon={<ArrowDown />} />
        <div className="h-full border-r border-(--color-border)" />

        <FilterItem label="Order Type" icon={<ArrowDown />} />
        <div className="h-full border-r border-(--color-border)" />
        <FilterItem label="Order Status" icon={<ArrowDown />} />
        <div className="h-full border-r border-(--color-border)" />
        <div
          className="h-full flex items-center px-3 gap-5"
          onClick={() => setListData(data)}
        >
          <p className="font-bold text-sm whitespace-nowrap text-[#EA0234]">
            Reset Filter
          </p>
          <Reset className=" text-[#EA0234]" />
        </div>
        <div className="h-full border-r border-(--color-border)" />
        <div
          className="h-full flex items-center px-3 gap-5"
          onClick={() => sortData()}
        >
          <p className="font-bold text-sm whitespace-nowrap">Sort By</p>
          <SortAscendingCircle className=" text-(--color-svg)" />
        </div>
      </div> */}

        {/* <div className="w-full mt-5 rounded-2xl border border-(--color-border) overflow-hidden">
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
            {paginatedData.map((item, index) => (
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
     
                  onClick={() => {
                    setActiveModal("date");
                    setFormState({
                      date: formState.date,
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
                      type: formState.type,
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
                      status: formState.status,
                      order: item,
                    });
                  }}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

        {/* <div className="w-full flex flex-row justify-end items-center pt-10">
        <div className="flex h-[30px] items-center border border-(--color-border)   rounded-2xl overflow-hidden w-fit">
  
          <Button
            variant="text"
            size="sm"
            onClick={handlePrev}
            className="p-2 hover:bg-gray-100 disabled:opacity-40"
            disabled={page === 1}
          >
            <ArrowLeft className="text-(--color-svg) " />
          </Button>

       
          <span className="w-full border-r border-(--color-border)"></span>
          <div className="w-full border-r border-(--color-border) text-sm font-medium">
            {page} / {totalPages}
          </div>

         
          <Button
            variant="text"
            size="sm"
            onClick={handleNext}
            className="p-2 hover:bg-gray-100 disabled:opacity-40"
            disabled={page === totalPages}
          >
            <ArrowRight className="text-(--color-svg) " />
          </Button>
        </div>
      </div> */}

    
      </div>

  );
};
export default OrderList;

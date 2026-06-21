import { useState } from "react";
import { useOrders } from "../../../context/OrderContext";

import type { ActiveModalType } from "../../../types/orderList";
import { data, itemsPerPage } from "../../../constants/orderData";

import Table from "./_components/table";
import FilterBar from "./_components/filterBar";
import Pagination from "./_components/pagination";

const OrderList: React.FC = () => {
  const { listData, setListData } = useOrders();
  const [activeModal, setActiveModal] = useState<ActiveModalType>(null);
  const [page, setPage] = useState<number>(1);

  const sortData = () => {
    setListData((prev) =>
      [...prev].sort(
        (a, b) => a.date.getTime() - b.date.getTime(),
        // (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        // (a,b) => console.log("(a.date)",(a.date))
      ),
    );
  };

  const paginatedData = listData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );
  console.log("listData", data);
  return (
    <div className="h-full bg-[#F9F9F9] flex flex-col justify-start items-start px-5">
      <p className="text-(--color-text) font-bold text-3xl ">OrderList</p>
      <FilterBar
        onReset={() => setListData(data)}
        onSort={sortData}
        activeModal={activeModal}
      />
      <Table
        paginatedData={paginatedData}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};
export default OrderList;

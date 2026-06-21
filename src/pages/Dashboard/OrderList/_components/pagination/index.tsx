import ArrowLeft from "@/assets/icons/ArrowLeft.svg?react";
import ArrowRight from "@/assets/icons/arrowRight.svg?react";

import Button from "../../../../../components/kit/Button";

import { itemsPerPage } from "../../../../../constants/orderData";
import { useOrders } from "../../../../../context/OrderContext";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  const { listData } = useOrders();
  const totalPages = Math.ceil(listData.length / itemsPerPage);
  const startItem = listData.length === 0 ? 0 : (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, listData.length);
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
  return (
    <div className="w-full  flex justify-between items-center py-5">
      <div>
        <p className="text-(--color-border)">
          showing {startItem} - {endItem} of {listData.length}
        </p>
      </div>
      <div className="flex h-[30px] items-center border border-(--color-border) rounded-2xl overflow-hidden w-fit">
        <Button
          variant="text"
          size="sm"
          onClick={handlePrev}
          disabled={page === 1}
          className="p-x-2 hover:bg-gray-100 disabled:opacity-40"
        >
          <ArrowLeft />
        </Button>

        <span className="w-full border-r border-(--color-border)" />

        <div className="w-full h-full  border-r border-(--color-border) text-sm font-medium">
        </div>

        <Button
          variant="text"
          size="sm"
          onClick={handleNext}
          disabled={page >= totalPages}
          className="p-x-2 hover:bg-gray-100 disabled:opacity-40"
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;

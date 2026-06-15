import Filter from "../../../../../assets/icons/Filter.svg?react";
import ArrowDown from "../../../../../assets/icons/ArrowDown.svg?react";
import Reset from "../../../../../assets/icons/Reset.svg?react";
import SortAscendingCircle from "../../../../../assets/icons/SortAscendingCircle.svg?react";


import FilterItem from "./filterItem";


interface FilterBarProps {
  onReset: () => void;
  onSort: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  onReset,
  onSort,
}) => {
   
  return (
    <div className="mt-5 h-[40px] w-[818px] border border-(--color-border) rounded-2xl flex items-center justify-between">
      <div className="h-full flex items-center px-3 gap-5">
        <Filter className="text-(--color-svg)" />
      </div>

      <div className="h-full border-r border-(--color-border)" />

      <div className="h-full flex items-center px-3 gap-5">
        <p className="font-bold text-sm whitespace-nowrap">
          Filter By
        </p>
      </div>

      <div className="h-full border-r border-(--color-border)" />

      <FilterItem label="Date" icon={<ArrowDown />} />

      <div className="h-full border-r border-(--color-border)" />

      <FilterItem
        label="Order Type"
        icon={<ArrowDown />}
      />

      <div className="h-full border-r border-(--color-border)" />

      <FilterItem
        label="Order Status"
        icon={<ArrowDown />}
      />

      <div className="h-full border-r border-(--color-border)" />

      <div
        className="h-full flex items-center px-3 gap-5 cursor-pointer"
        onClick={onReset}
      >
        <p className="font-bold text-sm whitespace-nowrap text-[#EA0234]">
          Reset Filter
        </p>

        <Reset className="text-[#EA0234]" />
      </div>

      <div className="h-full border-r border-(--color-border)" />

      <div
        className="h-full flex items-center px-3 gap-5 cursor-pointer"
        onClick={onSort}
      >
        <p className="font-bold text-sm whitespace-nowrap">
          Sort By
        </p>

        <SortAscendingCircle className="text-(--color-svg)" />
      </div>
    </div>
  );
};

export default FilterBar;
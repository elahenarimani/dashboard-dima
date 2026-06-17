type Props = {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
};
const FilterItem = ({ label, icon, active = false }: Props) => {
  return (
    <div
      className={`h-full flex items-center px-3 gap-2 cursor-pointer ${
        active ? "text-[#A2A2A4]" : ""
      }`}
    >
      <p className="font-bold text-sm whitespace-nowrap ">{label}</p>
      <p className={`${active ? "text-[#A2A2A4]" : "text-black"}`}>{icon}</p>
    </div>
  );
};
export default FilterItem;

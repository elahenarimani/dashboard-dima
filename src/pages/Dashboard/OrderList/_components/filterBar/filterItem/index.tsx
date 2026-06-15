

type Props = {
  label: string;
  icon?: React.ReactNode;
};
const FilterItem = ({ label, icon}: Props) => {
  return (
    <div
      className="h-full flex items-center px-3 gap-2 cursor-pointer"
    >
      <p className="font-bold text-sm whitespace-nowrap ">{label}</p>
      <p className="text-(--color-svg)">{icon}</p>
    </div>
  );
};
export default FilterItem
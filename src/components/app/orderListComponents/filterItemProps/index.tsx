

type Props = {
  label: string;
  icon?: React.ReactNode;
  // type: ActiveModal;
//   onOpen: (type: ActiveModal, rect: DOMRect) => void;
  // setActiveModal: React.Dispatch<React.SetStateAction<ActiveModal>>;
};

const FilterItem = ({ label, icon}: Props) => {
  return (
    <div
      className="h-full flex items-center px-3 gap-2 cursor-pointer"
    >
      <p className="font-bold text-sm whitespace-nowrap">{label}</p>
      {icon}
    </div>
  );
};
export default FilterItem
import { useState } from "react";

import Toast from "../../../../../components/app/Toast";
import Button from "../../../../../components/kit/Button";
import Input from "../../../../../components/kit/Input";

import Bin from "../../../../../assets/icons/Bin.svg?react";
import Star from "../../../../../assets/icons/Star.svg?react";

type CardProps = {
  title: string;
  initialDone?: boolean;
  id: number;
  onDelete: (id: number) => void;
};
const Card: React.FC<CardProps> = ({
  title,
  initialDone = false,
  id,
  onDelete,
}) => {
  const [isChecked, setIsChecked] = useState(initialDone);
  const [toast, setToast] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white hover:bg-(--color-primary) border border-(--color-border) w-full rounded-xl px-2 py-3">
      <Toast
        message="Text Is Done"
        show={toast}
        onClose={() => setToast(false)}
      />

      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Input
            ariaLabel="done"
            type="checkbox"
            checked={isChecked}
            onChange={(val) => {
              const checked = val as boolean;
              setIsChecked(checked);

              if (checked) {
                setToast(true);
              }
            }}
          />
          <p className="font-bold text-base pt-1">{title}</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="cursor-pointer"
          >
            <Star
              className={`w-6 h-6 ${
                isFavorite
                  ? "fill-yellow-400 text-yellow-400 "
                  : "fill-none text-gray-500 "
              }`}
            />
          </button>
          <Button
            variant="contained"
            className="w-[65px] h-[40px] hover:bg-[#9C9911]"
            onClick={() => onDelete(id)}
          >
            <Bin className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Card;

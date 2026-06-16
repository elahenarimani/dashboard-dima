// import { useState } from "react";

// import { useState } from "react";
// import Toast from "../../../../../components/app/Toast";
// import Button from "../../../../../components/kit/Button";
// import Input from "../../../../../components/kit/Input";

// import Bin from "../../../../../assets/icons/Bin.svg?react";
// import Button from "../../../../../components/kit/Button";
// import Input from "../../../../../components/kit/Input";
// import Toast from "../../../../../components/app/Toast";

// const Card: React.FC = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [toast, setToast] = useState(false);
  
//   return (
//     <div className="bg-white hover:bg-(--color-primary) border border-(--color-border) w-full rounded-xl h-full px-2">
//       <div className="w-full flex justify-between items-center">
//         <div className="w-full flex flex-start text-center gap-2">
//           <Toast
//             message="Text Is Done"
//             show={toast}
//             onClose={() => setToast(false)}
//           />
//           <Input
//             ariaLabel="done"
//             type="checkbox"
//             checked={isChecked}
//             onChange={(val) => {
//               const checked = val as boolean;
//               setIsChecked(checked);

//               if (checked) {
//                 setToast(true);
//               }
//             }}
//           />
//           <p className="text-black hover:text-white font-bold text-base pt-1">
//             Review with HR
//           </p>
//         </div>
//         <Button
//           variant="contained"
//           className=" w-[65px] h-[40px] hover:bg[#9C9911] "
//         >
//           <Bin className="text-white" />
//         </Button>
//       </div>
//     </div>
//   );
// };
// export default Card;

import { useState } from "react";
import Toast from "../../../../../components/app/Toast";
import Button from "../../../../../components/kit/Button";
import Input from "../../../../../components/kit/Input";

import Bin from "../../../../../assets/icons/Bin.svg?react";


type CardProps = {
  title: string;
  initialDone?: boolean;
};
const Card: React.FC<CardProps> = ({ title, initialDone = false }) => {
  const [isChecked, setIsChecked] = useState(initialDone);
  const [toast, setToast] = useState(false);

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

          <p className="font-bold text-base pt-1">
            {title}
          </p>
        </div>

        <Button
          variant="contained"
          className="w-[65px] h-[40px] hover:bg-[#9C9911]"
        >
          <Bin className="text-white" />
        </Button>

      </div>
    </div>
  );
};
export default Card;
// import type React from "react";

// interface DashboardCardProps {
//   title: string;
//   value: string | number;
//   subtitle: string;
//   percent: string;
//   trendText: string;
//   icon: React.ReactNode;
//   bgColor: string;
// }

// const DashboardCard: React.FC<DashboardCardProps> = ({
//   title,
//   value,
//   subtitle,
//   percent,
//   trendText,
//   icon,
//   bgColor,
// }) => {
//   return (
//     <div className="w-[300px] h-[170px] bg-white rounded-[5px] p-[24px]">
//       <div className="w-full h-full flex flex-col justify-between items-center gap-[30px]">
//         {/* top */}
//         <div className="w-full flex flex-row justify-between items-center">
//           <div
//             className="w-[60px] h-[60px] flex justify-center items-center rounded-[20px]"
//             style={{ backgroundColor: bgColor }}
//           >
//             {icon}
//           </div>

//           <div className="w-full flex flex-col justify-between items-end">
//             <p className="text-gray-500">{title}</p>
//             <p>{value}</p>
//           </div>
//         </div>

//         {/* bottom */}
//         <div className="w-full flex flex-row justify-center items-center gap-[5px]">
//           <p className="text-gray-500">{subtitle}</p>
//           <p className="text-green-400">{percent}</p>
//           <p>{trendText}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardCard;


import type { FC, SVGProps } from "react";

interface DashboardCardProps {
  title: string;
  value: string;
  percentage: string;
  description: string;
  isPositive: boolean;
  Icon: FC<SVGProps<SVGSVGElement>>;
  TrendIcon: FC<SVGProps<SVGSVGElement>>;
  bgColor: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  percentage,
  description,
  isPositive,
  Icon,
  TrendIcon,
  bgColor,
}) => {
  return (
    <div className="w-[300px] h-[170px] bg-white rounded-[5px] p-[24px]">
      <div className="w-full h-full flex flex-col justify-between gap-[30px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-between h-full">
            <p className="text-gray-500 font-semibold text-base">{title}</p>
            <p className="font-bold text-xl">{value}</p>
          </div>

          <div
            className={`w-[60px] h-[60px] rounded-2xl flex justify-center items-center ${bgColor}`}
          >
            <Icon />
          </div>
        </div>

        <div className="flex items-center gap-[5px]">
          <TrendIcon />

          <p
            className={
              isPositive ? "text-green-400" : "text-(--color-red)"
            }
          >
            {percentage}
          </p>

          <p className="text-gray-500 font-semibold text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
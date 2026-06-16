import RenderLineChart from "./_components/renderLineChart/renderLineChart";

import Pending from "../../../assets/icons/Pending.svg?react";
import Sailes from "../../../assets/icons/Sailes.svg?react";
import Order from "../../../assets/icons/Order.svg?react";
import User from "../../../assets/icons/User.svg?react";
import TrendingUp from "../../../assets/icons/TrendingUp.svg?react";
import TrendingDown from "../../../assets/icons/TrendingDown.svg?react";

const Chart: React.FC = () => {
  return (
    <div className="h-full bg-[#F9F9F9] flex flex-col justify-start items-start px-5 ">
      <p className="text-(--color-text) font-bold text-3xl">Dashboard</p>

      <div className="w-full grid sm:grid-cols-1 gap-y-8 md:grid-cols-2 2xl:flex 2xl:justify-between items-center justify-items-center  pl-[32px] pr-[32px] mt-5">
        <div className="total-users w-[300px] h-[170px] bg-white rounded-[5px] p-[24px]">
          <div className="w-full h-full flex flex-col justify-between items-center gap-[30px]">
            <div className="w-full h-full flex flex-row justify-between items-center ">
              <div className="w-full h-full flex flex-col justify-between ">
                <div>
                  <p className="text-gray-500 font-semibold text-base">
                    Total Pending
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl">40,689</p>
                </div>
              </div>
              <div className="w-[60px] h-[60px] bg-(--color-orange) flex justify-center items-center rounded-2xl">
                <Pending />
              </div>
            </div>
            <div className="w-full h-full flex flex-row justify-center items-center gap-[5px]">
              <div>
                <TrendingUp />
              </div>
              <p className="text-green-400">8.5%</p>

              <p className="text-gray-500 font-semibold text-base">
                Up from yesterday
              </p>
            </div>
          </div>
        </div>
        <div className="total-order w-[300px] h-[170px] bg-white rounded-[5px] p-[24px]">
          <div className="w-full h-full flex flex-col justify-between items-center gap-[30px]">
            <div className="w-full h-full flex flex-row justify-between items-center ">
              <div className="w-full h-full flex flex-col justify-between">
                <div>
                  <p className="text-gray-500 font-semibold text-base">
                    Total Sales
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl">40,689</p>
                </div>
              </div>
              <div className="w-[60px] h-[60px] bg-(--color-green) flex justify-center items-center rounded-2xl">
                <Sailes />
              </div>
            </div>
            <div className="w-full h-full flex flex-row justify-center items-center gap-[5px]">
              <div>
                <TrendingDown />
                {/* <AiOutlineRise className="text-[25px] text-green-400" /> */}
              </div>
              <p className="text-(--color-red)">4.5%</p>

              <p className="text-gray-500 font-semibold text-base">
                Down from yesterday
              </p>
            </div>
          </div>
        </div>
        <div className="total-sales w-[300px] h-[170px] bg-white rounded-[5px]">
          <div className="w-full h-full flex flex-col justify-between items-center gap-[30px] p-[24px]">
            <div className="w-full h-full flex flex-row justify-between items-center ">
              <div className="w-full h-full flex flex-col justify-between ">
                <div>
                  <p className="text-gray-500 font-semibold text-base">
                    Total Order
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl">10,293</p>
                </div>
              </div>
              <div className="w-[60px] h-[60px] bg-[var(--color-yellow)] flex justify-center items-center rounded-2xl">
                {/* <RiGroupFill className="text-[#8280FF]" /> */}
                <Order />
              </div>
            </div>
            <div className="w-full h-full flex flex-row justify-center items-center gap-[5px]">
              <div>
                <TrendingUp />
                {/* <AiOutlineRise className="text-[25px] text-green-400" /> */}
              </div>
              <p className="text-green-400">1.3%</p>

              <p className="text-gray-500 font-semibold text-base">
                Up from past week
              </p>
            </div>
          </div>
        </div>
        <div className="total-pending w-[300px] h-[170px] bg-white rounded-[5px]">
          <div className="w-full h-full flex flex-col justify-between items-center gap-[30px] p-[24px]">
            <div className="w-full h-full flex flex-row justify-between items-center ">
              <div className="w-full h-full flex flex-col justify-between">
                <div>
                  <p className="text-gray-500 font-semibold text-base">
                    Total User
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl">40,689</p>
                </div>
              </div>
              <div className="w-[60px] h-[60px] bg-(--color-blue) flex justify-center items-center rounded-2xl">
                {/* <RiGroupFill className="text-[#8280FF]" /> */}
                <User />
              </div>
            </div>
            <div className="w-full h-full flex flex-row justify-center items-center gap-[5px]">
              <div>
                <TrendingUp />
                {/* <AiOutlineRise className="text-[25px] text-green-400" /> */}
              </div>

              <p className="text-green-400">8.5%</p>

              <p className="text-gray-500 font-semibold text-base">
                Up from yesterday
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sales-detail !w-full h-[340px] bg-white rounded-[5px] mt-[30px] pb-[58px] pt-[7px] pl-[32px] pr-[32px] mb-[5px]">
        <p className="mt-5 font-bold text-2xl">Sales Details</p>
        <RenderLineChart />
      </div>
      {/* <div className="deals-details w-full h-[344px] bg-white rounded-[5px] mt-[30px] pl-[15px] pr-[15px] pt-[20px]">
        جزئیات معاملات
      </div> */}
    </div>
  );
};
export default Chart;

import RenderLineChart from "./_components/renderLineChart/renderLineChart";


const Chart: React.FC = () => {
  return (
    <div className="w-full bg-[#F5F6FA] ">
      <p className="w-full text-[32px] mt-[30px] mb-[23px] pr-[30px]">
        داشبورد
      </p>
      <div className="w-full h-full">
        <div className="w-full grid sm:grid-cols-1 gap-y-8 md:grid-cols-2 2xl:flex 2xl:justify-between items-center justify-items-center  pl-[32px] pr-[32px]">
          <div className="total-users w-[300px] h-[170px] bg-white rounded-[5px] p-[24px]">
            <div className="w-full h-full flex flex-col justify-between items-center gap-[30px]">
              <div className="w-full h-full flex flex-row justify-between items-center ">
                <div className="w-[60px] h-[60px] bg-[#E5E4FF] flex justify-center items-center rounded-[20px]">
                  {/* <RiGroupFill className="text-[#8280FF]" /> */}
                </div>
                <div className="w-full h-full flex flex-col justify-between items-end">
                  <div>
                    <p className="text-gray-500">کل سفارشات در انتظار</p>
                  </div>
                  <div>
                    <p>40,689</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex flex-row justify-center items-center gap-[5px]">
                <p className="text-gray-500">افزایش نسبت به دیروز</p>
                <p className="text-green-400">8.5%</p>
                <div>
                  {/* <AiOutlineRise className="text-[25px] text-green-400" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="total-order w-[300px] h-[170px] bg-white rounded-[5px] p-[24px]">
            <div className="w-full h-full flex flex-col justify-between items-center gap-[30px]">
              <div className="w-full h-full flex flex-row justify-between items-center ">
                <div className="w-[60px] h-[60px] bg-[#E5E4FF] flex justify-center items-center rounded-[20px]">
                  {/* <RiGroupFill className="text-[#8280FF]" /> */}
                </div>
                <div className="w-full h-full flex flex-col justify-between items-end">
                  <div>
                    <p className="text-gray-500">تمامی فروش ها</p>
                  </div>
                  <div>
                    <p>40,689</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex flex-row justify-center items-center gap-[5px]">
                <p className="text-gray-500">افزایش نسبت به دیروز</p>
                <p className="text-green-400">8.5%</p>
                <div>
                  {/* <AiOutlineRise className="text-[25px] text-green-400" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="total-sales w-[300px] h-[170px] bg-white rounded-[5px]">
            <div className="w-full h-full flex flex-col justify-between items-center gap-[30px] p-[24px]">
              <div className="w-full h-full flex flex-row justify-between items-center ">
                <div className="w-[60px] h-[60px] bg-[#E5E4FF] flex justify-center items-center rounded-[20px]">
                  {/* <RiGroupFill className="text-[#8280FF]" /> */}
                </div>
                <div className="w-full h-full flex flex-col justify-between items-end">
                  <div>
                    <p className="text-gray-500">تمامی سفارشات</p>
                  </div>
                  <div>
                    <p>10,293</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex flex-row justify-center items-center gap-[5px]">
                <p className="text-gray-500">افزایش نسبت به دیروز</p>
                <p className="text-green-400">1.3%</p>
                <div>
                  {/* <AiOutlineRise className="text-[25px] text-green-400" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="total-pending w-[300px] h-[170px] bg-white rounded-[5px]">
            <div className="w-full h-full flex flex-col justify-between items-center gap-[30px] p-[24px]">
              <div className="w-full h-full flex flex-row justify-between items-center ">
                <div className="w-[60px] h-[60px] bg-[#E5E4FF] flex justify-center items-center rounded-[20px]">
                  {/* <RiGroupFill className="text-[#8280FF]" /> */}
                </div>
                <div className="w-full h-full flex flex-col justify-between items-end">
                  <div>
                    <p className="text-gray-500">تمامی کاربران</p>
                  </div>
                  <div>
                    <p>40,689</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex flex-row justify-center items-center gap-[5px]">
                <p className="text-gray-500">افزایش نسبت به دیروز</p>
                <p className="text-green-400">8.5%</p>
                <div>
                  {/* <AiOutlineRise className="text-[25px] text-green-400" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sales-detail !w-full h-[344px] bg-white rounded-[5px] mt-[30px] pb-[58px] pt-[7px] pl-[32px] pr-[32px] mb-[5px]">
        <p className="mt-[50px]">جزئیات فروش</p>
        <RenderLineChart />
      </div>
      {/* <div className="deals-details w-full h-[344px] bg-white rounded-[5px] mt-[30px] pl-[15px] pr-[15px] pt-[20px]">
        جزئیات معاملات
      </div> */}
    </div>
  );
};
export default Chart;

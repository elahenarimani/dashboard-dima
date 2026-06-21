import RenderLineChart from "./_components/renderLineChart/renderLineChart";

import { dashboardCards } from "../../../constants/chart";

import DashboardCard from "./_components/DashboardCard";

const Chart: React.FC = () => {
  return (
    <div className="h-full bg-[#F9F9F9] flex flex-col justify-start items-start px-5 ">
      <p className="text-(--color-text) font-bold text-3xl">Dashboard</p>

      <div className="w-full grid sm:grid-cols-1 gap-y-8 md:grid-cols-2 2xl:flex 2xl:justify-between items-center justify-items-center pl-[32px] pr-[32px] mt-5">
        {dashboardCards.map((card) => (
          <DashboardCard
            key={card.title}
            title={card.title}
            value={card.value}
            percentage={card.percentage}
            description={card.description}
            isPositive={card.isPositive}
            Icon={card.Icon}
            TrendIcon={card.TrendIcon}
            bgColor={card.bgColor}
          />
        ))}
      </div>

      <div className="sales-detail !w-full h-[340px] bg-white rounded-[5px] mt-[30px] pb-[58px] pt-[7px] pl-[32px] pr-[32px] mb-[5px]">
        <p className="mt-5 font-bold text-2xl">Sales Details</p>
        <RenderLineChart />
      </div>
    </div>
  );
};
export default Chart;

import { Outlet } from "react-router-dom";
import DashboardNav from "./_components/DashboardNav";
import Header from "../../components/app/Header";

const Dashboard: React.FC = () => {
  return (
    <div className="h-screen grid grid-cols-[60px_1fr] grid-rows-[60px_1fr] gap-x-4 gap-y-4">
      {/* Sidebar */}
      <aside className="row-span-2 bg-[#F9F9F9]">
        <DashboardNav />
      </aside>

      {/* Header */}
      <div  className="h-[50px]">
        <Header />
      </div>

      {/* Content */}
      <main className=" bg-[#F9F9F9] ">
        <Outlet />
      </main>
    </div>
  );
};
export default Dashboard;

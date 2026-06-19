import { NavLink } from "react-router-dom";
import ToDo from "@/assets/icons/ToDo.svg?react";
import Menu from "@/assets/icons/Menu.svg?react";
import OrderList from "@/assets/icons/Orderlist.svg?react";
import Dashboard from "@/assets/icons/dashboard.svg?react";

interface DashboardNavProps {
  className?: string;
}

export const DashboardNav: React.FC<DashboardNavProps> = ({ className }) => {
  return (
    <div className={` w-[60px] h-full pt-4 bg-white  ${className}`}>
      <ul className="flex flex-col  justify-start items-center gap-6 ">
        <li>
          <Menu className="text-(--color-svg)" />
        </li>
        <li>
          <NavLink to={"/dashboard/chart"}>
            {({ isActive }) => (
              <Dashboard
                className={isActive ? "text-[#4379EE]" : "text-(--color-svg)"}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/orderList"}>
            {({ isActive }) => (
              <OrderList
                className={isActive ? "text-[#4379EE]" : "text-(--color-svg)"}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/todo"}>

            {({ isActive }) => (
              <ToDo
                className={isActive ? "text-[#4379EE]" : "text-(--color-svg)"}
              />
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default DashboardNav;

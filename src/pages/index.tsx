import { Outlet } from "react-router";
import { OrderProvider } from "../context/OrderContext";

const AppRoot: React.FC = () => {
  return (
    <div className="w-full min-w-full h-full">
      <OrderProvider>
          <Outlet />
      </OrderProvider>
    </div>
  );
};

export default AppRoot;

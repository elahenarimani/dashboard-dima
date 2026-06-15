import { Outlet } from "react-router";
import { OrderProvider } from "../context/OrderContext";
import { Suspense } from "react";

const AppRoot: React.FC = () => {
  return (
    <div className="w-full min-w-full h-full">
      <OrderProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </OrderProvider>
    </div>
  );
};

export default AppRoot;

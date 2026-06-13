import { Outlet } from "react-router";

const AppRoot: React.FC = () => {
  return (
    <div className="w-full min-w-full h-full">
      <Outlet />
    </div>
  );
};

export default AppRoot;
import { Outlet } from "react-router";

const Login: React.FC = () => {
  return (
    <div className="flex justify-between items-center ">
      <p>login</p>
      <Outlet />

    </div>
  );
};

export default Login;
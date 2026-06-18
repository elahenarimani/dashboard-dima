import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import ErrorBoundary from "../ErrorBoundary/index"

export const App: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  );
};
export default App;

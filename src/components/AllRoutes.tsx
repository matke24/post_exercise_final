import { Routes, Route } from "react-router-dom";
import { AllRoutesData } from "../utils/props";

const AllRoutes = ({ routerData }: AllRoutesData) => {
  return (
    <Routes>
      {routerData.map((route) => {
        return <Route path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};

export default AllRoutes;

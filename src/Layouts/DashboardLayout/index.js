import { Outlet } from "react-router-dom";
import NestedRoute from "../../NestedRouting/NestedRoute";
import { Redux } from "../../Redux/Redux";

const DashboardLayouts = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default DashboardLayouts;

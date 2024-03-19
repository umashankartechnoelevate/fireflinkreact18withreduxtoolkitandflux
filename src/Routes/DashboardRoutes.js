import { Redux } from "../Redux/Redux";
import NestedRoute from "../NestedRouting/NestedRoute";
import SassComponent from "../Components/Sass/SassComponent";
import { MUIComp } from "../Components/MUIAllComponents/MUIComp";
import TailWindCss from "../TailWindCss/TailWindCss";
import TodoList from "../Flux/Component/TodoList/TodoList";

const DashboardRoutes = {
  path: "/nested",
  element: <NestedRoute />,

  children: [
    {
      path: "/nested/redux",
      element: <Redux />,
    },
    {
      path: "/nested/sass",
      element: <SassComponent />,
    },
    {
      path: "/nested/materialUI",
      element: <MUIComp />,
    },
    {
      path: "/nested/tailwind",
      element: <TailWindCss />,
    },
    {
      path: "/nested/flux",
      element: <TodoList />,
    },
  ],
};
export default DashboardRoutes;

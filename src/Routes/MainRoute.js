import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Interview } from "../Interview/Interview";
import { UseIdHook } from "../NewHooks/UseId";
import { UseTransitionHook } from "../NewHooks/UseTransition";
import { Redux } from "../Redux/Redux";
import { MUIComp } from "../Components/MUIAllComponents/MUIComp";
import TodoList from "../Flux/Component/TodoList/TodoList";
import SassComponent from "../Components/Sass/SassComponent";
import TailWindCss from "../TailWindCss/TailWindCss";
import NestedRoute from "../NestedRouting/NestedRoute";
import RoutingWithLayout from ".";

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/useId" element={<UseIdHook />} />
        <Route path="/useTransition" element={<UseTransitionHook />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/materialUI" element={<MUIComp />} />
        <Route path="/flux" element={<TodoList />} />
        <Route path="/sass" element={<SassComponent />} />
        <Route path="/tailwind" element={<TailWindCss />} />
        <Route path="/nested" element={<NestedRoute />}>
          <Route path="/nested/sass" element={<SassComponent />} />
          <Route path="/nested/redux" element={<Redux />} />
          <Route path="/nested/materialUI" element={<MUIComp />} />
          <Route path="/nested/tailwind" element={<TailWindCss />} />
          <Route path="/nested/flux" element={<TodoList />} />
        </Route>
        <Route path="/" element={<Interview />} />
      </Routes>

      <RoutingWithLayout />
    </BrowserRouter>
  );
};

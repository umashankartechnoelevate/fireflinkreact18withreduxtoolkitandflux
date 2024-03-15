import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Interview } from "../Interview/Interview";
import { UseIdHook } from "../NewHooks/UseId";
import { UseTransitionHook } from "../NewHooks/UseTransition";
import { Redux } from "../Redux/Redux";
import { MUIComp } from "../Components/MUIAllComponents/MUIComp";
import TodoList from "../Flux/Component/TodoList/TodoList";

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/useId" element={<UseIdHook />} />
        <Route path="/useTransition" element={<UseTransitionHook />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/materialUI" element={<MUIComp />} />
        <Route path="/flux" element={<TodoList/>} />
        <Route path="/" element={<Interview />} />

      </Routes>
    </BrowserRouter>
  );
};

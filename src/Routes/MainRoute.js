import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Interview } from "../Interview/Interview";
import { UseIdHook } from "../NewHooks/UseId";
import { UseTransitionHook } from "../NewHooks/UseTransition";
import { Redux } from "../Redux/Redux";

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/useId" element={<UseIdHook />} />
        <Route path="/useTransition" element={<UseTransitionHook />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/" element={<Interview />} />
      </Routes>
    </BrowserRouter>
  );
};

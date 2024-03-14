import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";

export const UseTransitionHook = () => {
  const { mainState } = useContext(MainContext);

  return (
    <>
      <h1> Hi {mainState} you can refer UseTransition Hook</h1>
    </>
  );
};

import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [mainState, setMainState] = useState("I am Umashankar form context");

  return (
    <>
      <MainContext.Provider value={{ mainState }}>
        {children}
      </MainContext.Provider>
    </>
  );
};

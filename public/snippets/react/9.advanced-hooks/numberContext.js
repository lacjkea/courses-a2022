//contexts/numberContext.js
import { createContext } from "react";

export const NumberContext = createContext();
const myGlobalValue = 42;

export const NumberProvider = ({ children }) => {
  return (
    <NumberContext.Provider value={myGlobalValue}>
      {children}
    </NumberContext.Provider>
  );
};

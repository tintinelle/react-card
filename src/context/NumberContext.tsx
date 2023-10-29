import React, { useState, createContext, useContext } from "react";

type NumberContextType = {
  numberState: number;
  setNumberState: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  children: React.ReactNode;
};

export const NumberContext = createContext<null | NumberContextType>(null);

export const NumberContextProvider = ({ children }: Props) => {
  const [numberState, setNumberState] = useState(0);

  return (
    <NumberContext.Provider value={{ numberState, setNumberState }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumberContext = () => {
  const numberContext = useContext(NumberContext);
  return numberContext;
};

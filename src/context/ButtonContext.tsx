import React, { useState, createContext, useContext } from "react";

type ButtonContextType = {
  buttonState: boolean;
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: React.ReactNode;
};

export const ButtonContext = createContext<null | ButtonContextType>(null);

export const ButtonContextProvider = ({ children }: Props) => {
  const [buttonState, setButtonState] = useState(false);

  return (
    <ButtonContext.Provider value={{ buttonState, setButtonState }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => {
  const buttonContext = useContext(ButtonContext);
  return buttonContext;
};

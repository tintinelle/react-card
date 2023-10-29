import React, { type FC, useEffect } from "react";
import "./Body.css";
import { useButtonContext } from "../../context/ButtonContext";
import { useNumberContext } from "../../context/NumberContext";
import data from "../../data/images.json";

interface BodyProps {
  subtitle?: string;
  children?: React.ReactNode;
}

const Body: FC<BodyProps> = ({ subtitle, children }) => {
  const buttonContext = useButtonContext();
  const numberContext = useNumberContext();

  useEffect(() => {
    numberContext?.setNumberState(data.length);
  }, []);

  return (
    <div className={`body ${buttonContext?.buttonState ? "body_hidden" : ""}`}>
      <h2 className="body__subtitle">{subtitle}</h2>
      {children}
    </div>
  );
};

export default Body;

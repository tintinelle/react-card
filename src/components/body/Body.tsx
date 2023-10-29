import React, { type FC } from "react";
import "./Body.css";
import { useButtonContext } from "../../context/ButtonContext";

interface BodyProps {
  subtitle?: string;
  children?: React.ReactNode;
}

const Body: FC<BodyProps> = ({ subtitle, children }) => {
  const buttonContext = useButtonContext();
  // console.log(`body ${buttonContext?.buttonState}`);

  return (
    <div className="body">
      <h2>{subtitle}</h2>
      <div
        className={`body__infoblock ${
          buttonContext?.buttonState
            ? "body__infoblock_hidden"
            : "body__infoblock_shown"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Body;

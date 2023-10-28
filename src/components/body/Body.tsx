import React, { type FC } from "react";
import "./Body.css";
import { useButtonContext } from "../../context/ButtonContext";

interface BodyProps {
  subtitle?: string;
  src?: string;
  className?: string;
  children?:
    | React.ReactNode
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const Body: FC<BodyProps> = ({ subtitle, src, className, children }) => {
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

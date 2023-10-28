import React, { type FC } from "react";
import "./Footer.css";

interface FooterProps {
  subtitle?: string;
  children?:
    | React.ReactNode
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const Footer: FC<FooterProps> = ({ subtitle, children }) => {
  return (
    <div className="footer">
      <h2 className="footer__title">{subtitle}</h2>
      <div className="footer__info">{children}</div>
    </div>
  );
};

export default Footer;

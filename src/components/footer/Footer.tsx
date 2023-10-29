import React, { type FC } from "react";
import "./Footer.css";
import { useNumberContext } from "../../context/NumberContext";

interface FooterProps {
  subtitle?: string;
  children?: React.ReactNode;
}

const Footer: FC<FooterProps> = ({ subtitle, children }) => {
  const numberContext = useNumberContext();

  return (
    <div className="footer">
      <p className="footer__text">{`The number of elements in body is ${numberContext?.numberState}`}</p>
      <div className="footer__info">{children}</div>
    </div>
  );
};

export default Footer;

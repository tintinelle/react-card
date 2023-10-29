import React, { type FC } from "react";
import "./Header.css";
import { useButtonContext } from "../../context/ButtonContext";

interface HeaderProps {
  subtitle?: string;
  children?: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ subtitle }) => {
  const buttonContext = useButtonContext();
  console.log(buttonContext?.buttonState);

  return (
    <div className="header">
      <button
        className={`header__button ${
          buttonContext?.buttonState
            ? "header__button_expand"
            : "header__button_collapse"
        }`}
        onClick={() =>
          buttonContext?.setButtonState(!buttonContext.buttonState)
        }
      ></button>
      <h1 className="header__title">{subtitle}</h1>
    </div>
  );
};

export default Header;

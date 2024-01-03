import React from "react";
import {PrimaryButton} from "..";
import {useNavigate} from "react-router-dom";

interface IFooterMenuProps {
  buttonText: string;
  redirectTo?: string;
  onClick?: () => void;
}

const FooterMenu = ({buttonText, redirectTo, onClick}: IFooterMenuProps) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (redirectTo) navigate(redirectTo);
    if (onClick) onClick();
  };
  return (
    <footer className="board-footer">
      <div className="board-footer-button">
        <PrimaryButton
          text={buttonText}
          icon="uil:plus"
          type="button"
          onClick={() => onClickHandler()}
        />
      </div>
    </footer>
  );
};

export default FooterMenu;

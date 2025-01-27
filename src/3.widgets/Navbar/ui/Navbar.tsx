import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { LoginModal } from "4.features/AuthByUsername";
import { getUserAuthState, userActions } from "5.entities/User";
import { Button } from "6.shared/ui-kit/Button/Button";

import { classNames } from "6.shared/lib";
import cls from "./Navbar.module.scss";

export interface INavbarProps {
  className?: string;
}

export const Navbar = (props: INavbarProps) => {
  const { className } = props;

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const authData = useSelector(getUserAuthState);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleCloseModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <div className={classNames(cls.navbar, [className])}>
        <Button
          className={cls["auth-button"]}
          onClick={handleLogout}
          variant="clearInverted"
        >
          {t("Выйти")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, [className])}>
      <Button
        className={cls["auth-button"]}
        onClick={handleOpenModal}
        variant="clearInverted"
      >
        {t("Войти")}
      </Button>

      <LoginModal isOpen={isAuthModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

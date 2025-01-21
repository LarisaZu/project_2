import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "6.shared/ui-kit/Button/Button";

import { classNames } from "6.shared/lib";

import cls from "./Navbar.module.scss";
import { LoginModal } from "4.features/AuthByUsername";

export interface INavbarProps {
  className?: string;
}

export const Navbar = (props: INavbarProps) => {
  const { className } = props;

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { t } = useTranslation();

  const handleCloseModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsAuthModalOpen(true);
  };

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

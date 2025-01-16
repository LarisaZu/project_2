import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "6.shared/lib";
import { Modal } from "6.shared/ui-kit/Modal/Modal";
import { Button } from "6.shared/ui-kit/Button/Button";

import cls from "./Navbar.module.scss";

export interface INavbarProps {
  className?: string;
}

export const Navbar = (props: INavbarProps) => {
  const { className } = props;

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { t } = useTranslation();

  const handleToggleModal = () => {
    setIsAuthModalOpen((prev) => !prev);
  };

  return (
    <div className={classNames(cls.navbar, [className])}>
      <Button
        className={cls["auth-button"]}
        onClick={handleToggleModal}
        variant="clearInverted"
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={handleToggleModal}>
        {t("Lorem30")}
      </Modal>
    </div>
  );
};

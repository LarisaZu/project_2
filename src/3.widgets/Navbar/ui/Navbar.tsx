import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { LoginModal } from "4.features/AuthByUsername";
import { getUserAuthState, userActions } from "5.entities/User";
import { Button } from "6.shared/ui-kit/Button/Button";
import { Text } from "6.shared/ui-kit/Text/Text";
import { AppLink } from "6.shared/ui-kit/AppLink/AppLink";
import { USER_LOCALSTORAGE_KEY } from "6.shared/const/localstorage";
import { classNames } from "6.shared/lib";
import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";

import cls from "./Navbar.module.scss";

export interface INavbarProps {
  className?: string;
}

export const Navbar = memo(function Navbar(props: INavbarProps) {
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
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  };

  if (authData) {
    return (
      <header className={classNames(cls.navbar, [className])}>
        <Text
          title="My App"
          size="size_l"
          className={cls.logo}
          variant="inverted"
        />

        <AppLink to={routePath[AppRoute.ARTICLE_CREATE]}>
          {t("Создать статью")}
        </AppLink>

        <Button
          className={cls["auth-button"]}
          onClick={handleLogout}
          variant="clearInverted"
        >
          {t("Выйти")}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, [className])}>
      <Button
        className={cls["auth-button"]}
        onClick={handleOpenModal}
        variant="clearInverted"
      >
        {t("Войти")}
      </Button>

      {isAuthModalOpen && (
        <LoginModal isOpen={isAuthModalOpen} onClose={handleCloseModal} />
      )}
    </header>
  );
});

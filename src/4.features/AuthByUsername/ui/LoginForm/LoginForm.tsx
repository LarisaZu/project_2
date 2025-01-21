import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "6.shared/ui-kit/Button/Button";
import { Input } from "6.shared/ui-kit/Input/Input";

import { classNames } from "6.shared/lib";
import cls from "./LoginForm.module.scss";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = (props: ILoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, [className])}>
      <Input
        id="username"
        value={username}
        onChange={(s) => setUsername(s)}
        label={t("Введите логин")}
        autofocus
      />
      <Input
        id="password"
        value={password}
        onChange={(s) => setPassword(s)}
        label={t("Введите пароль")}
      />
      <Button className={cls.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};

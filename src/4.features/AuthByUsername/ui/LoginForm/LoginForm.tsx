import { useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button } from "6.shared/ui-kit/Button/Button";
import { Input } from "6.shared/ui-kit/Input/Input";
import { Text } from "6.shared/ui-kit/Text/Text";

import { classNames } from "6.shared/lib";
import { loginFormActions } from "../../model/slice/loginFormSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../api/loginByUsername";
import cls from "./LoginForm.module.scss";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = memo(function LoginForm(props: ILoginFormProps) {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { username, password, isLoading, error } = useSelector(getLoginState);

  const handleUsernameChange = useCallback(
    (value: string) => {
      dispatch(loginFormActions.setUsername(value));
    },
    [dispatch]
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(loginFormActions.setPassword(value));
    },
    [dispatch]
  );

  const handleSubmitForm = useCallback(() => {
    dispatch(loginByUsername({ password, username }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.loginForm, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && <Text text={t("Неверный логин или пароль")} variant="error" />}
      <Input
        id="username"
        value={username}
        onChange={handleUsernameChange}
        label={t("Введите логин")}
        autofocus
      />
      <Input
        id="password"
        value={password}
        onChange={handlePasswordChange}
        label={t("Введите пароль")}
      />
      <Button
        className={cls.loginBtn}
        disabled={isLoading}
        variant="outline"
        onClick={handleSubmitForm}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});

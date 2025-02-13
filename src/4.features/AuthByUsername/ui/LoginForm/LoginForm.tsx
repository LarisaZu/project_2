import { useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button } from "6.shared/ui-kit/Button/Button";
import { Input } from "6.shared/ui-kit/Input/Input";
import { Text } from "6.shared/ui-kit/Text/Text";

import { classNames } from "6.shared/lib";
import {
  loginFormActions,
  loginFormReducer,
} from "../../model/slice/loginFormSlice";
import { loginByUsername } from "../../api/loginByUsername";
import cls from "./LoginForm.module.scss";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "6.shared/lib/hooks";

export interface ILoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: TReducersList = { loginForm: loginFormReducer };

const LoginForm = memo(function LoginForm(props: ILoginFormProps) {
  const { className, onSuccess } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

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

  const handleSubmitForm = useCallback(async () => {
    const result = await dispatch(loginByUsername({ password, username }));

    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [dispatch, password, username, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.loginForm, [className])}>
        <Text title={t("Форма авторизации")} />
        {error && (
          <Text text={t("Неверный логин или пароль")} variant="error" />
        )}
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;

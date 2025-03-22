import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  EValidateProfileError,
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from "5.entities/Profile";
import { ECurrency } from "5.entities/Currency";
import { ECountry } from "5.entities/Country";
import { ProfileCard } from "5.entities/Profile";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch, useInitialEffect } from "6.shared/lib/hooks";
import { Text } from "6.shared/ui-kit/Text/Text";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const initialReducers: TReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const data = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const { profileId } = useParams<{ profileId: string }>();

  const { t } = useTranslation("profile");

  const validateErrorTranslates = {
    [EValidateProfileError.NO_DATA]: t("Отсутствуют данные пользователя"),
    [EValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
    [EValidateProfileError.INCORRECT_COUNTRY]: t("Страна обязательна"),
    [EValidateProfileError.SERVER_ERROR]: t("Произошла ошибка на сервере"),
  };

  useInitialEffect(() => {
    if (profileId) {
      dispatch(fetchProfileData(profileId));
    }
  });

  const handleChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstName: value || "" }));
    },
    [dispatch]
  );

  const handleChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastName: value || "" }));
    },
    [dispatch]
  );

  const handleChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const handleChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const handleChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const handleChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const handleChangeCurrency = useCallback(
    (currency?: ECurrency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const handleChangeCountry = useCallback(
    (country?: ECountry) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ProfilePageHeader readonly={readonly} />
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text key={err} variant="error" text={validateErrorTranslates[err]} />
        ))}
      <ProfileCard
        data={data}
        error={error}
        readonly={readonly}
        isLoading={isLoading}
        onChangeFirstName={handleChangeFirstName}
        onChangeLastName={handleChangeLastName}
        onChangeAge={handleChangeAge}
        onChangeCity={handleChangeCity}
        onChangeUsername={handleChangeUsername}
        onChangeAvatar={handleChangeAvatar}
        onChangeCurrency={handleChangeCurrency}
        onChangeCountry={handleChangeCountry}
      />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

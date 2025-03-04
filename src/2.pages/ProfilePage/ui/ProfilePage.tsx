import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  profileReducer,
} from "5.entities/Profile";
import { ProfileCard } from "5.entities/Profile";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "6.shared/lib/hooks";
import { ECurrency } from "5.entities/Currency";
import { ECountry } from "5.entities/Country";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const initialReducers: TReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const data = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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
      dispatch(profileActions.updateProfile({ age: value || "" }));
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

import { useTranslation } from "react-i18next";

import { profileReducer } from "5.entities/Profile";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const initialReducers: TReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation("profile");

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div>{t("Профиль")}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

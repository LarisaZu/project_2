import { useEffect } from "react";

import { fetchProfileData, profileReducer } from "5.entities/Profile";
import { ProfileCard } from "5.entities/Profile";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "6.shared/lib/hooks";

const initialReducers: TReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

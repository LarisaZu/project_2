import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { profileActions, updateProfileData } from "5.entities/Profile";
import { getUserAuthState } from "5.entities/User";
import { useAppDispatch } from "6.shared/lib/hooks";
import { classNames } from "6.shared/lib";
import { Text } from "6.shared/ui-kit/Text/Text";
import { Button } from "6.shared/ui-kit/Button/Button";

import cls from "./ProfilePageHeader.module.scss";

interface IProfilePageHeaderProps {
  className?: string;
  readonly?: boolean;
}

export const ProfilePageHeader = (props: IProfilePageHeaderProps) => {
  const { className, readonly } = props;

  const { profileId } = useParams<{ profileId: string }>();
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthState);
  const canEdit = profileId === authData?.id;

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    if (profileId) {
      dispatch(updateProfileData(profileId));
    }
  }, [dispatch, profileId]);

  return (
    <div className={classNames(cls.profilePageHeader, [className])}>
      <Text title={t("Профиль")} />

      {canEdit && (
        <div className={cls["btn-wrapper"]}>
          {readonly ? (
            <Button onClick={handleEdit}>{t("Редактировать")}</Button>
          ) : (
            <>
              <Button onClick={handleSave}>{t("Сохранить")}</Button>
              <Button onClick={handleCancel} variant="outline_red">
                {t("Отмена")}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

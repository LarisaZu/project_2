import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "6.shared/lib";
import { Text } from "6.shared/ui-kit/Text/Text";
import { Button } from "6.shared/ui-kit/Button/Button";

import { profileActions, updateProfileData } from "5.entities/Profile";
import { useAppDispatch } from "6.shared/lib/hooks";

import cls from "./ProfilePageHeader.module.scss";

interface IProfilePageHeaderProps {
  className?: string;
  readonly?: boolean;
}

export const ProfilePageHeader = (props: IProfilePageHeaderProps) => {
  const { className, readonly } = props;

  const dispatch = useAppDispatch();

  const { t } = useTranslation("profile");

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, [className])}>
      <Text title={t("Профиль")} />

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
    </div>
  );
};

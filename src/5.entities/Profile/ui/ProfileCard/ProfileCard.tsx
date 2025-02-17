import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Text } from "6.shared/ui-kit/Text/Text";
import { Button } from "6.shared/ui-kit/Button/Button";
import { Input } from "6.shared/ui-kit/Input/Input";
import { classNames } from "6.shared/lib";

import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";

import cls from "./ProfileCard.module.scss";

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: IProfileCardProps) => {
  const { className } = props;

  const profile = useSelector(getProfileData);

  const { t } = useTranslation("profile");

  return (
    <div className={classNames(cls.profileCard, [className])}>
      <div className={cls.header}>
        <Text title={t("Профиль")} />
        <Button className={cls.editBtn}>{t("Редактировать")}</Button>
      </div>
      <div className={cls.profileData}>
        <Input
          id="firstName"
          value={profile?.firstName}
          label={t("Ваше имя")}
        />
        <Input
          id="lastName"
          value={profile?.lastName}
          label={t("Ваша фамилия")}
        />
      </div>
    </div>
  );
};

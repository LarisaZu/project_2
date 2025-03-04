import { useTranslation } from "react-i18next";

import { Text } from "6.shared/ui-kit/Text/Text";
import { Input } from "6.shared/ui-kit/Input/Input";
import { classNames, TMods } from "6.shared/lib";
import { Loader } from "6.shared/ui-kit/Loader/Loader";
import { Avatar } from "6.shared/ui-kit/Avatar/Avatar";
import { CurrencySelect, ECurrency } from "5.entities/Currency";

import { IProfile } from "5.entities/Profile/model/types/profile";
import { CountrySelect, ECountry } from "5.entities/Country";

import cls from "./ProfileCard.module.scss";

interface IProfileCardProps {
  className?: string;
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: ECurrency) => void;
  onChangeCountry?: (currency: ECountry) => void;
}

export const ProfileCard = (props: IProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, [className, cls.error])}>
        <Text
          variant="error"
          title={t("При загрузке профиля произошла ошибка")}
          text={t("Попробуйте перезагрузить страницу")}
          align="center"
        />
      </div>
    );
  }

  const mods: TMods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.profileCard, [className], mods)}>
      {data?.avatar && (
        <div className={cls["avatar-wrapper"]}>
          <Avatar
            src={data.avatar}
            alt={`Avatar ${data.username || ""}`}
            size={200}
          />
        </div>
      )}
      <Input
        id="firstName"
        value={data?.firstName}
        label={t("Ваше имя")}
        onChange={onChangeFirstName}
        readonly={readonly}
      />
      <Input
        id="lastName"
        value={data?.lastName}
        label={t("Ваша фамилия")}
        onChange={onChangeLastName}
        readonly={readonly}
      />
      <Input
        id="age"
        value={data?.age?.toString()}
        label={t("Возраст")}
        onChange={onChangeAge}
        readonly={readonly}
        type="number"
      />
      <Input
        id="city"
        value={data?.city}
        label={t("Город")}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        id="username"
        value={data?.username}
        label={t("Имя пользователя")}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        id="avatar"
        value={data?.avatar}
        label={t("Ссылка на аватар")}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </div>
  );
};

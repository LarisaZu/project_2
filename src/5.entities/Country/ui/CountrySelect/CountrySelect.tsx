import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "6.shared/lib";
import { Select } from "6.shared/ui-kit/Select/Select";
import { ECountry } from "../../model/types/country";

interface ICountrySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: ECountry) => void;
  readonly?: boolean;
}

const countryOptions = [
  { label: ECountry.RUSSIA, value: ECountry.RUSSIA },
  { label: ECountry.USA, value: ECountry.USA },
  { label: ECountry.GEORGIA, value: ECountry.GEORGIA },
];

export const CountrySelect = memo(function CurrencySelect(
  props: ICountrySelectProps
) {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation("profile");

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as ECountry);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames("", [className])}
      label={t("Выберите страну")}
      options={countryOptions}
      value={value}
      onChange={handleChange}
      readonly={readonly}
    />
  );
});

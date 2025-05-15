import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "6.shared/lib";
import { Select } from "6.shared/ui-kit/Select/Select";
import { ECurrency } from "../../model/types/currency";

interface ICurrencySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: ECurrency) => void;
  readonly?: boolean;
}

const currencyOptions = [
  { label: ECurrency.RUB, value: ECurrency.RUB },
  { label: ECurrency.USD, value: ECurrency.USD },
  { label: ECurrency.EUR, value: ECurrency.EUR },
];

export const CurrencySelect = memo(function CurrencySelect(
  props: ICurrencySelectProps
) {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation("profile");

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as ECurrency);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames("", [className])}
      label={t("Выберите валюту")}
      options={currencyOptions}
      value={value}
      onChange={handleChange}
      readonly={readonly}
    />
  );
});

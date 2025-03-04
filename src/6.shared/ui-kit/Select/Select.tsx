import React, { ChangeEvent, memo, useMemo } from "react";
import { classNames } from "6.shared/lib";
import cls from "./Select.module.scss";

interface IOption {
  label: string;
  value: string;
}

interface ISelectProps {
  className?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: IOption[];
  readonly?: boolean;
}

export const Select = memo(function Select(props: ISelectProps) {
  const { className, label, value, onChange, options = [], readonly } = props;

  const optionsList = useMemo(
    () =>
      options.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      )),
    [options]
  );

  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(evt.target.value);
  };

  return (
    <div className={classNames(cls.wrapper, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={handleChange}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});

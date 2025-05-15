import React, { ChangeEvent, useMemo } from "react";
import { classNames } from "6.shared/lib";
import cls from "./Select.module.scss";

export interface ISelectOption<T extends string> {
  label: string;
  value: T;
}

interface ISelectProps<T extends string> {
  className?: string;
  label?: string;
  value?: T;
  onChange?: (value: T) => void;
  options?: ISelectOption<T>[];
  readonly?: boolean;
}

export const Select = function Select<T extends string>(
  props: ISelectProps<T>
) {
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
    onChange?.(evt.target.value as T);
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
};

import React, {
  InputHTMLAttributes,
  useState,
  useRef,
  useEffect,
  memo,
} from "react";
import { classNames, TMods } from "6.shared/lib";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "onKeyUp" | "readOnly"
>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  id: string;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo(function Input(props: IInputProps) {
  const {
    className,
    type = "text",
    value = "",
    onChange,
    label,
    id,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretOffset, setCaretOffset] = useState(0);
  const [font, setFont] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const isCaretVisible = isFocused && !readonly;

  // Функция для расчёта ширины текста
  const getTextWidth = (text: string, font: string): number => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context) {
      context.font = font;
      return context.measureText(text).width;
    }
    return 0;
  };

  // Получаем шрифт из стилей
  useEffect(() => {
    if (inputRef.current) {
      const computedStyle = getComputedStyle(inputRef.current);
      const fontValue = computedStyle.font;
      setFont(fontValue);
    }

    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  // Обновление позиции каретки
  const handleCaretPosition = () => {
    if (inputRef.current) {
      const position = inputRef.current.selectionStart || 0;
      const textBeforeCaret = value?.slice(0, position);
      const offset = getTextWidth(textBeforeCaret, font);
      //   setCaretPosition(position);
      setCaretOffset(offset);
    }
  };

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    onChange?.(value);
    handleCaretPosition();
  };

  const onFocusHandler = () => {
    setIsFocused(true);
    handleCaretPosition();
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  const onSelectHandler = () => {
    handleCaretPosition();
  };

  const mods: TMods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.inputWrapper, [className], mods)}>
      {label && <label htmlFor={id} className={cls.label}>{`${label}>`}</label>}

      <div className={cls.caretWrapper}>
        <input
          id={id}
          ref={inputRef}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onSelect={onSelectHandler}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span className={cls.caret} style={{ left: `${caretOffset}px` }} />
        )}
      </div>
    </div>
  );
});

import React, { memo } from "react";

import { Button } from "6.shared/ui-kit/Button/Button";
import { classNames } from "6.shared/lib";
import CopyIcon from "6.shared/lib/assets/icons/copy.svg";

import cls from "./Code.module.scss";

interface ICodeProps {
  className?: string;
  text: string;
}

export const Code = memo(function Code(props: ICodeProps) {
  const { className, text } = props;

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <pre
      className={classNames(cls.code, [className])}
      role="img"
      aria-label="CODE"
    >
      <Button className={cls["copy-btn"]} variant="clear" onClick={handleCopy}>
        <CopyIcon className={cls["copy-icon"]} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});

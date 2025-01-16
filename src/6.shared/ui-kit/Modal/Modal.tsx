import React, { ReactNode, useEffect, useCallback } from "react";
import { classNames } from "6.shared/lib";
import { Portal } from "6.shared/ui-kit/Portal/Portal";

import cls from "./Modal.module.scss";

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: IModalProps) => {
  const { className, children, isOpen = false, onClose } = props;

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const handleKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleContentClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (isOpen) {
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [handleKeyDown, isOpen]);

  return (
    <Portal>
      <div className={classNames(cls.modal, [className], mods)}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

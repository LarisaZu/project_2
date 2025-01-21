import React, { ReactNode, useEffect, useCallback, useState } from "react";
import { classNames } from "6.shared/lib";
import { Portal } from "6.shared/ui-kit/Portal/Portal";

import cls from "./Modal.module.scss";

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = (props: IModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { className, children, isOpen = false, onClose, lazy } = props;

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const handleContentClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
  };

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (isOpen) {
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [isOpen, handleClose]);

  if (!isMounted && lazy) {
    return null;
  }

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

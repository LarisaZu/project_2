import React from "react";

import { LoginForm } from "../LoginForm/LoginForm";
import { Modal } from "6.shared/ui-kit/Modal/Modal";

import { classNames } from "6.shared/lib";
import cls from "./LoginModal.module.scss";

interface ILoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: ILoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <div className={classNames(cls.loginModal, [className])}>
      <Modal isOpen={isOpen} onClose={onClose} lazy>
        <LoginForm />
      </Modal>
    </div>
  );
};

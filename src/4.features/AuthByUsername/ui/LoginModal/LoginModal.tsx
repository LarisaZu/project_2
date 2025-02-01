import { Suspense } from "react";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Modal } from "6.shared/ui-kit/Modal/Modal";

import { Loader } from "6.shared/ui-kit/Loader/Loader";
import { classNames } from "6.shared/lib";

interface ILoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: ILoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <div className={classNames("", [className])}>
      <Modal isOpen={isOpen} onClose={onClose} lazy>
        <Suspense fallback={<Loader />}>
          <LoginFormAsync />
        </Suspense>
      </Modal>
    </div>
  );
};

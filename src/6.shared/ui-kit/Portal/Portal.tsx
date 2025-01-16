import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "6.shared/lib";

interface IPortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal = (props: IPortalProps) => {
  const { children, element = document.body } = props;

  const { theme } = useTheme();

  return createPortal(<div className={theme}>{children}</div>, element);
};

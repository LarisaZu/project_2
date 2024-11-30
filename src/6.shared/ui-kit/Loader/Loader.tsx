import { classNames } from "6.shared/lib";
import cls from "./Loader.module.scss";

interface ILoaderProps {
  className?: string;
}

export const Loader = (props: ILoaderProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls["lds-ripple"], [className])}>
      <div></div>
      <div></div>
    </div>
  );
};

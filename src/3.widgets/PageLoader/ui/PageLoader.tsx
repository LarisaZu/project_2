import { Loader } from "6.shared/ui-kit/Loader/Loader";
import { classNames } from "6.shared/lib";
import cls from "./PageLoader.module.scss";

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader = (props: IPageLoaderProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.pageLoader, [className])}>
      <Loader />
    </div>
  );
};

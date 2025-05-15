import React, { CSSProperties } from "react";
import { classNames } from "6.shared/lib";
import cls from "./Skeleton.module.scss";

interface ISkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  radius?: string;
}

export const Skeleton = (props: ISkeletonProps) => {
  const { className, width, height, radius } = props;

  const styles: CSSProperties = { width, height, borderRadius: radius };

  return (
    <div className={classNames(cls.skeleton, [className])} style={styles}></div>
  );
};
